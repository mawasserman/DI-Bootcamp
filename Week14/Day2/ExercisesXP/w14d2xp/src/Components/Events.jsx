import React, {useState} from 'react';

//Exercise 2
function Events () {

    const clickMe = () => {
        alert("I was clicked");
    }

    //Behold Sir/Lady Checker! I missunderstood the task! Now I don't want to erase this code, so I will comment it out.
    
    // const [pressedKey, setPressedKey] = useState('Press any key');
    // const WRONGhandleKeyDown = (e) => {
    //     setPressedKey(`You pressed the "${e.key.toUpperCase()}" key`);
    // }
    // return (
    //     <>
    //         <button onClick={clickMe}>Click me</button>
    //         <input type="text"
    //         onKeyDown={WRONGhandleKeyDown} 
    //         value={pressedKey} />
    //     </>
         
    // )

    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${inputValue}`);         
    }}

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const [isToggleOn, setIsToggleOn] = useState(true);

    const changeToggle = () => {
        if (isToggleOn) {
            setIsToggleOn(false);
        } else {
            setIsToggleOn(true);
        }}


    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <br></br><br></br>
            <input type="text" 
            onKeyDown={handleKeyDown} 
            onChange={handleChange} 
            value={inputValue}
            placeholder="Type and then press ENTER" />
            <br></br><br></br>
            <button onClick={changeToggle}>
            {isToggleOn ? "ON" : "OFF"}
            </button>
        </>
        
    )
  }



export default Events;