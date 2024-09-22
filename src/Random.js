import { useState } from "react"

const Random=()=>{

    const[change,changenum]=useState(0)

    const handleZero=()=>{
        changenum(0)
    }
   const handleChange=()=>{
    changenum(Math.floor(Math.random()*10))
   }
    return(
        <div className="container">
            <h1>Random Number Generator</h1>
          <input className="Inp" value={change}></input><br/> 
            <button style={{backgroundColor:"#004D8E",color:"#FFFFFF", padding:"10px",border:"none",borderRadius:"10px", margin:"10px"}} onClick={handleChange}>Generate</button>
            <button style={{backgroundColor:"#004D8E",color:"#FFFFFF", padding:"10px",border:"none",borderRadius:"10px", margin:"10px"}} onClick={handleZero}>Reset</button>
        </div>
    )
}
export default Random