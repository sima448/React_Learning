import React from "react";
import User from "./User.jsx";
function App(){
  //let name="sima";
  return(
    <div>
      <h1>Event and function call</h1>
     {/* <h2>hello {name}</h2> */}
       <User name="sima" age={20}/>
    </div>
  )
}

export default App;

