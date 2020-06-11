// ArrowButton.js
import React from "react";

const ArrowButton = (props) => {
    return (
        <button onClick={() => props.onGetDay()}>{props.arrow}</button>
    )
};

export default ArrowButton;
