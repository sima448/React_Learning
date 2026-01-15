import Login ,{Profile, Setting} from './UserComponent'
import Header from './Header'
function App(){
  //alert(sum())
  return(
    <div>
      <Header/>
      <h1>Hello React</h1>
      <h1>Code step by step {sum()}</h1>
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

