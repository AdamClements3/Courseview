import React, { Component } from "react";
// import { Grid, Button, ButtonGroup, Typography} from '@mui/material';
import Card from "./Card";
import InputBox from "./InputBox"

function InputHandler() {
    // const [valueDep, setValueDep] = useState('');
    // const [valueCourse, setValueCourse] = userState('');

    async function updateData() {
        const response = await fetch("/api/send-info", 
        {
            method: 'PUT',
            body: JSON.stringify({ value })   
        })
        if (response.ok) {
            console.log('Data update success');
        }
        else
        {
            console.error('data womp womp');
        }

    }

    function InputChange(event) {
        var courseNum = document.getElementById("CourseNum").value;
        var courseDep = document.getElementById("CourseDep").value;
        if (courseNum < "0000" || courseNum > "9999")
        {
            alert("No Subject Selected or Invalid Course Number");
        }
        else
        {
            updateData(courseNum, courseDep);
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