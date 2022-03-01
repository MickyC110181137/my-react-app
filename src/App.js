import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [number, setNumber] =useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <div>{number}</div>
        <button onClick={()=>{setNumber(number+1)}}>加一</button>
        <button onClick={()=>{setNumber(number-1)}}>減一</button>
        <div>yeah</div>
      </header>
      
    </div>
  );
}

export default App;


