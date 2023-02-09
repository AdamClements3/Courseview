import * as React from "react";
import Card from './Card.js';
// import "CourseView/frontend/static/css/index.css"

function CardContainer(props) {
    
    console.log(props.data);
    var prof1GradeString = "";
    var prof2GradeString = "";
    var prof3GradeString = "";
    if (props.data.length < 2)
    {
        var backEnd = [props.data[0], [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']], [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]];

    }
    else if (props.data.length < 3)
    {
        var backEnd = [props.data[0], props.data[1],[[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]];
 
    }
    else
    {
        var backEnd = props.data
    }

    var prof1 = backEnd[0];
    var prof2 = backEnd[1];
    var prof3 = backEnd[2];

    if (props.data.length < 2)
    {
        var prof1GradeString = "Grade Distribution: A: " + prof1[2] + "B: " +  prof1[3] + "C: " + prof1[4] + "D: " + prof1[5] + "F: " + prof1[6] + "W: " + prof1[7] + "RMP Score: " + prof1[11] + "Difficulty: " + prof1[12] + "Take Again: " + prof1[13];
        var prof2GradeString = "";
        var prof3GradeString = "";
    }
    else if (props.data.length < 3)
    {
        // var backEnd = [props.data[0], props.data[1],[[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]];
        var prof1GradeString = "Grade Distribution: A: " + prof1[2] + "B: " +  prof1[3] + "C: " + prof1[4] + "D: " + prof1[5] + "F: " + prof1[6] + "W: " + prof1[7] + "RMP Score: " + prof1[11] + "Difficulty: " + prof1[12] + "Take Again: " + prof1[13];
        var prof2GradeString = "Grade Distribution: A: " + prof2[2] + "B: " +  prof2[3] + "C: " + prof2[4] + "D: " + prof2[5] + "F: " + prof2[6] + "W: " + prof2[7] + "RMP Score: " + prof2[11] + "Difficulty: " + prof2[12] + "Take Again: " + prof2[13];
        var prof3GradeString = "";
    }
    else
    {
        // var backEnd = props.data
        var prof1GradeString = "Grade Distribution: A: " + prof1[2] + "B: " +  prof1[3] + "C: " + prof1[4] + "D: " + prof1[5] + "F: " + prof1[6] + "W: " + prof1[7] + "RMP Score: " + prof1[11] + "Difficulty: " + prof1[12] + "Take Again: " + prof1[13];
        var prof2GradeString = "Grade Distribution: A: " + prof2[2] + "B: " +  prof2[3] + "C: " + prof2[4] + "D: " + prof2[5] + "F: " + prof2[6] + "W: " + prof2[7] + "RMP Score: " + prof2[11] + "Difficulty: " + prof2[12] + "Take Again: " + prof2[13];
        var prof3GradeString = "Grade Distribution: A: " + prof3[2] + "B: " +  prof3[3] + "C: " + prof3[4] + "D: " + prof3[5] + "F: " + prof3[6] + "W: " + prof3[7] + "RMP Score: " + prof3[11] + "Difficulty: " + prof3[12] + "Take Again: " + prof3[13];
    }

    // var prof1GradeString = "Grade Distribution: A: " + prof1[2] + "B: " +  prof1[3] + "C: " + prof1[4] + "D: " + prof1[5] + "F: " + prof1[6] + "W: " + prof1[7] + "RMP Score: " + prof1[8] + "RMP Score: " + prof1[9] + "Difficulty: " + prof1[10];

    return (
        <div class = 'card-container'>
            <Card name = {prof1[0]} body = {prof1GradeString} class = 'ProfessorBox'></Card>
            <Card name = {prof2[0]} body = {prof2GradeString} class = 'ProfessorBox'></Card>
            <Card name = {prof3[0]} body = {prof3GradeString} class = 'ProfessorBox'></Card>
        </div>
    )
}

export default CardContainer