import './App.css';
import React from "react"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
export default function App(){
    const [start, setstart] = React.useState(false)
    function toggle(){
        setstart(oldstart => !oldstart)
        
    }
    return(<div>{start===true ? <SecondPage toggle={()=>toggle()}/> : <FirstPage toggle={()=>toggle()}/>}</div>)
      
}
