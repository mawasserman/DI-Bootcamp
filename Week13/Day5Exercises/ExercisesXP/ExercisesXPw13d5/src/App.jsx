import { useState } from 'react'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals.jsx'
import Exercise from './Exercise3.jsx'

  //Exercise 2
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

function App() {
  const [count, setCount] = useState(0)

  //Exercise 1
  // const myelement = <h1>I Love JSX!</h1>;

  // const sum = 5+5;

  // return (
  //   <>
  //   <p>Hello World!</p>
  //   {myelement}
  //   <p>React is {sum} times better with JSX</p>
  //   </>
  // )

  //Exercise 2 

  // return (
  //   <>
  //   <h3> {user.firstName} </h3>
  //   <h3> {user.lastName} </h3>
  //   <UserFavoriteAnimals favAnimals={user.favAnimals} />
  //   </>
  // )

  //Exercise 3

  return (
      <Exercise />
  )

}

export default App

