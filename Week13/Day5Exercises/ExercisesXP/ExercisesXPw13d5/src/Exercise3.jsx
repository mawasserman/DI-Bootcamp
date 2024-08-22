import React from "react";
import "./App.css";
import "./Exercise.css";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component {
    render() {
        return (
            <>
            <h1 className="ex3p1 style_header">This is a header</h1>
            <p className="para">This is a paragraph</p>
            <a href="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png">This is a link</a>
            <form>This is a form:
                <label>Enter your name:</label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
            <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png" alt=""></img>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                    
            </ul>
            </>

        )
    }
}

export default Exercise;
export {style_header};