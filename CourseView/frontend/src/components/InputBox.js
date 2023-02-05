import React, { useState } from 'react';

function InputBox(props) {
    return (
        <div>
            <input type="text" maxlength="4" id={props.id} placeholder={props.label}></input>
        </div>
    )
}

export default InputBox;