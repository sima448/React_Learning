import React from "react";
import User from "./User.jsx";
function App(){
   let fruit="Apple";
   
   const changeFruit=()=>{
    fruit="Mango";
    console.log(fruit);
   }


  return(
    <div>
    <h1>State in React js</h1>
    <h1>{fruit}</h1>
    <button onClick={changeFruit}>Change Fruit Name</button>
    
    </div>
  )
}

export default App;

