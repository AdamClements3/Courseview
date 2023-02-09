import React, { Component, useState } from "react";
// import { Grid, Button, ButtonGroup, Typography} from '@mui/material';
import Card from "./Card";
import InputBox from "./InputBox";
import axios from "axios";
import CardContainer from "./CardContainer";

function InputHandler() {
    // Unsure of difference between var and const, or function of setValue
    var [valueDep, setValueDep] = useState('');
    var [valueCourse, setValueCourse] = useState('');
    var backendDict = '';

    const [visible, setVisible] = useState(false);
    const [outputData, setOutputData] = useState([[[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
                                                 [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
                                                 [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]]);



    async function updateData(valueDep, valueCourse) {
        axios.post('/api/send-info', {
            params: {
                valueDep: valueDep,
                valueCourse: valueCourse
            }
        })
        .then(response => {
            // console.log(response.data);
            var backendJson = response.data;
            var backendJson = backendJson['stuff'];
            // console.log(backendJson);
            // var dictLength = backendJson.length;
            // console.log(backendJson);
            // console.log(dictLength);
            // var i = 0;
            // for (i = 0; i < dictLength; i++)
            // {
            //     console.log(backendJson[i]);
            // }
            backendDict = backendJson;
            console.log(backendDict.length);
            setOutputData(backendDict);
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
            // Testing conditional rendering for professors
            setVisible(true);
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
            <div>
                {visible ? (
                <CardContainer data = {outputData}></CardContainer>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default InputHandler;