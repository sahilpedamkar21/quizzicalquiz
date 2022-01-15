import React from "react"
import Button from "./Button"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import "./App.css"
export default function SecondPage(props){
    
    
    const[database, setdatabase] = React.useState([])
    const [questions, setquestions] = React.useState([])
    const [stage, setstage] = React.useState(1)
    
    
    
    
    
    
    
    
    
    
    function changestage(){
        setstage(2)
    
    
    }
    
    
    function toggleSelected(ansid, qid){
        
        
        setquestions(prevquestions => prevquestions.map(question => {
            return{
                ...question,
                answers : question.answers.map(ans => {
                    if(ans.id === ansid){
                        return ({...ans, isSelected : !ans.isSelected})
                    }
                    else if(ans.id !== ansid && question.id===qid){
                        return({...ans, isSelected : false})
                    }
                    else{
                        return ans
                    }
                })
            }
        })
        ) 
    }
    
    
    React.useEffect(function(){
        
        fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
        .then(res=>res.json())
        .then((data) => {
            const questionData = data.results.map((question) => {
            return {
                question: question.question,
                difficulty: question.difficulty,
                category: question.category,
                id: nanoid(),
                answers: [
                ...question.incorrect_answers.map((answer) => ({
                    answer: answer,
                    isCorrect: false,
                    isSelected: false,
                    id: nanoid(),
                })),
                {
                    answer: question.correct_answer,
                    isCorrect: true,
                    isSelected: false,
                    id: nanoid(),
                },
                ].sort(() => Math.random() - 0.5),
            };
            });
            setquestions(questionData);
        })
    }, [])
    
    
  
    function calculatescore(){
        let correct = 0
        questions.map(question=>{
            question.answers.map(ans => {
                if(ans.isCorrect===true && ans.isSelected===true){
                    correct++
                }
            })
        })
        return correct
    }
          
            
        function getbuttons(id){
            const buttons = questions.map(question => {
                if(question.id === id){
                    const group = question.answers.map(ans => {
                        return(<Button id={ans.id} answer={ans.answer} stage={stage} 
                        isCorrect={ans.isCorrect} isSelected={ans.isSelected} 
                        toggleSelected={()=>toggleSelected(ans.id, question.id)}/>)
                    })
                    return group
                }
            })
            return buttons
        } 
     
    
    const mcqs1 = questions.map(question => {
        
        return <div><div className="question">{question.question}</div><div className="buttons-set">{getbuttons(question.id)}</div></div>
    })
    
   
    
    
    if(stage === 1){
        return(
            <div className="secondpage">
            {mcqs1}
            <div className="checkbutton">
            <button onClick={changestage}>Check answers</button>
            </div>
            </div>
        )
    }
    else{
        
        const score = calculatescore()
        return(
            <div className="secondpage">
                {score===5 && <Confetti />}
                {mcqs1}
                <div className="footer">
                    <h2 className="score">You Scored {score}/5 Correct Answers</h2>
                    <button onClick={props.toggle}>Play Again</button>
                </div>
            </div>
        )
    }
    
}















