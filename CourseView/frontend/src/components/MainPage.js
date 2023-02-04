import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography} from '@mui/material';
import Drop from "./Drop";
import CardContainer from "./CardContainer";
import DropdownSearchContainer from "./DropdownSearchContainer";

function MainPage(props) {
    return (
        <div>
        <h1>Clemson University CourseView</h1>
        <div>
            <DropdownSearchContainer/>
            <div className="cardContainerDiv" id="cardContainerDivision">
            <CardContainer/>
            </div>
        </div>
        </div>
    );
}

export default MainPage;