import React, { Component } from "react";
import { render } from "react-dom";
import MainPage from "./MainPage";

// Treat this App as class component since we cannot use index.js to render
//  (taken care of by webpack and babel)
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainPage/>
            </div>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);