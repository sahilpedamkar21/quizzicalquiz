import React from "react"
import "./App.css"
export default function FirstPage(props){
    return(
        <div className="firstbody">
        <div className="firstpage">
        <img src="https://cdn-icons-png.flaticon.com/512/390/390933.png" />
        <h1>Quizzical</h1>
        <h3>Quiz for the fun</h3>
        
        <button onClick={props.toggle}>Start Quiz</button>
        </div>
        </div>
    )
}