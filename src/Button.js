import React from "react"
import "./App.css"
export default function Button(props){
    //console.log("Button()" + props.isSelected)
    if(props.stage === 1){
        return(
            <div>
                <button className = {props.isSelected===true ? "single-button-blue" : "single-button-white"} onClick={props.toggleSelected}>
                    {props.answer}
                </button>
            </div>)
    }
    else{
        
        let flag=1
        if(props.isSelected===true){
            if(props.isCorrect===true){
                
                flag=2 //green
                
            }
            else{
                flag=3 //red
            }
        }
        else{
            if(props.isCorrect===true){
                flag=2 //green
            }
        }
        
        function getclass(){
            if(flag===1){
                return "single-button-white"
            }
            else if(flag===2){
                return "correct-button"
            }
            else{
                return "wrong-button"
            }
        }
        
        return(
            <div>
                <button className = {getclass()} >
                    {props.answer}
                </button>
            </div>
            )
    }
}