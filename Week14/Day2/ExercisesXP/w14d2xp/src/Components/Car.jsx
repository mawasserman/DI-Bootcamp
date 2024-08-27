import React, { useState } from "react";
import Garage from "./Garage.jsx";

function Car (props) {
    // Exercise 1
    const { name, model} = props.carinfo;

    const [color, setColor] = useState("red");
      
    const [size, setSize] = useState("small");
      
    return (
    <>
        <Garage size={size}/>
        <h1> This car is a {color} {model}</h1>
    </>)
}

export default Car;