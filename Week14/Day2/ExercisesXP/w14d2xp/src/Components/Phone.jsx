// Exercise 3

// Phone.js
import React, { useState } from 'react';

function changeColor() {
 setPhone({ ...phone, color: "blue" });
}

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  function changeColor() {
    setPhone({ ...phone, color: "blue" });
   }

  return (
    <div>
      <h1>My phone is {phone.brand}</h1>
      <p>It is a {phone.color} {phone.model} from {phone.year}</p>
      <input type='button' value='Change color' onClick={changeColor} /> 
    </div>
  );
}

export default Phone;