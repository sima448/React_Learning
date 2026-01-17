function App(){
  function callFun(){
    alert("function called")
  }
//arrow function bhi use kr skte h
const fruit =() => {
  alert("fruit function called")
}

  return(
    <div>
      <h1>Event and function call</h1>
      <button className="" onClick={callFun}>Click Me</button>
      <button className="" onClick={fruit}>Click Me</button>
      {/*{fruit} ke place pe {callFun} bhi use kr skte h
      if we used to {callFun()} or {fruit()} here it will call the function on every render that means automatically call hone lagega without clicking the button, esliye hm use krenge {callFun} or {fruit}*/}
    </div>
  )
}

export default App;

