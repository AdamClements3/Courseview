import React, { Component, useState } from "react";
// import { Grid, Button, ButtonGroup, Typography} from '@mui/material';
import Card from "./Card";
import InputBox from "./InputBox";
import axios from "axios";

function InputHandler() {
    // Unsure of difference between var and const, or function of setValue
    var [valueDep, setValueDep] = useState('');
    var [valueCourse, setValueCourse] = useState('');
    var backendDict = '';

    async function updateData(valueDep, valueCourse) {
        axios.post('/api/send-info', {
            params: {
                valueDep: valueDep,
                valueCourse: valueCourse
            }
        })
        .then(response => {

            var backendJson = response.data;
            var dictLength = Object.keys(backendJson);
            console.log(dictLength);
            // for (i = 0; i < dictLength; i++)
            // {

            // }

        })
        .catch(error => {
            console.error(error);
        });
    }

    function InputChange(event) {
        // console.log();
        valueDep = document.getElementById("CourseDep").value;
        valueCourse = document.getElementById("CourseNum").value;
        if (valueCourse < "0000" || valueCourse > "9999")
        {
            alert("No Subject Selected or Invalid Course Number");
        }
        else
        {
            updateData(valueDep, valueCourse);
        }
    }

    return (
        <div>
            <div>
                <InputBox id = "CourseDep" label = "Course Department"></InputBox>
                <InputBox id = "CourseNum" label = "Course Number"></InputBox>
            </div>
            <div>
                <button onClick={InputChange}>Search</button>
            </div>
        </div>
    )
}

export default InputHandler;