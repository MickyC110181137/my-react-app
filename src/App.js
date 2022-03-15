import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [number, setNumber] =useState(0)
  return (
    <div className="App">
      <main>
        <div className="container">
          <h1>CCCounter</h1>
          <div className='size'>
            <span className= {`value ${number > 0 ? 'text-green': 'text-red'} ${number === 0 && 'text-black'}` }>
              {number}
            </span>
          </div>
  
          <div className="button-container">
            <button className="btn decrease" onClick= {() =>{setNumber(number - 1);}}>decrease</button>
            <button className="btn reset" onClick= {() =>{setNumber(0);}}>reset</button>
            <button className="btn increase" onClick= {() =>{setNumber(number + 1);}}>increase</button>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;


