import Login ,{Profile, Setting} from './UserComponent'
import Header from './Header'
function App(){
  //alert(sum())
  const name="Sima Singh";//user variable with jsx
  const userObj={ //object in jsx
    name :'abc',
    age :23,
    city:"delhi"
  }

  const userArray=["abcd", "qwe", "123"];//array in jsx
  let x = 20;//variable in jsx
  let y = 30;
   function fruits(){//function in jsx
    return "mango";
   }

   function add(a1,b1){//function with parameters in jsx
    return a1+b1;
   }
   
  function operation(a,b,op){//function with multiple parameters and conditional statements
   if(op == "+"){
     return a+b;
   }
    else if(op == "-"){
    return a-b;
   }
   else{
    return "Invalid Operation";
   }
  }
//html tag with jsx
let path="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200";

  return(
    <div>
      <Header/>
      <h1>Hello React</h1>
      <h1>Code step by step {sum()}</h1>
      <h1>{name?name:"User not found"}</h1>
      <h1>{x+y}</h1>
      <h1>{fruits()}</h1>
      <h1>{add(40, 50)}</h1>
      <h1>{operation(50,80, "+")}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[0]}</h1>
      <input type="text" value={name}/>
      <img src={path}/>
      <Login/>
      <Setting/>
      <Profile/>
      <Fruit/>
      <Color/>
    </div>
  )
}
function Fruit(){
  return(
    <h1>Apple</h1>
  )
}

function Color(){
  return(
    <h1>Red</h1>
  )
}
function sum(){
  return 3+6;
}

export default App;

