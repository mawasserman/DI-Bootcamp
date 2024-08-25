import { useState } from 'react'
import './App.css'

// Exercise 1
import Car from './Components/Car.jsx'

// Exercise 1
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car carinfo={carinfo} />
    </>
  )
}



export default App;
