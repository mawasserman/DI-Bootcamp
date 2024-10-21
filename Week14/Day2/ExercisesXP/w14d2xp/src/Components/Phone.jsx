// Exercise 3

// Phone.js
import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  return (
    <div>
      <h1>My phone is {phone.brand}</h1>
      <p>It is a {phone.color} {phone.model} from {phone.year}</p>
    </div>
  );
}

export default Phone;