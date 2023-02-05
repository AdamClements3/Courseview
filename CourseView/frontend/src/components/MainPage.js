import React, { Component } from "react";
// import { Grid, Button, ButtonGroup, Typography} from '@mui/material';
import Card from "./Card";
import InputHandler from "./InputHandler";

function MainPage(props) {
    return (
        <div>
            <Card name='Clemson University CourseView'></Card>
            <InputHandler></InputHandler>
            <div className = 'Logo'></div>
        </div>
    )
}


// function MainPage(props) {
//     return (
//         <div>
//         <h1>Clemson University CourseView</h1>
//         <div>
//             <DropdownSearchContainer/>
//             <div className="cardContainerDiv" id="cardContainerDivision">
//             <CardContainer/>
//             </div>
//         </div>
//         </div>
//     );
// }

export default MainPage;