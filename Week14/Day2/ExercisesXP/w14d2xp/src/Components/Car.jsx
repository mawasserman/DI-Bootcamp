import React from "react";
import { useState } from "react";

function Car (props) {

    const { name, model} = props.carinfo;
      
    return <h1> This car is {model}</h1>;
}

export default Car;