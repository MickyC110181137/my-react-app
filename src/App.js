import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [number, setNumber] =useState(0)
  return (
    <div className="App">
      <main>
        <div className='row'>
          <div className='Login'>
            <div class='form'>
              <input type="text" id="email" class="form__input" autoComplete="off" placeholder=" "/>
              <label for="email" class="form__label">你の帳號</label>
            </div>
            <br/>
            <br/>
            <div class='form'>
              <input type="password" id="word" class="form__input" autoComplete="off" placeholder=" "/>
              <label for="word" class="form__label">パスワードを取ります</label>
            </div>
          </div>
          
          <div className="container">
          <h1>CCCounter</h1>
          <div className='size'>
            <span className= {`value ${number > 0 ? 'text-green': 'text-red'} ${number === 0 && 'text-black'}` }>
              {number}
            </span>
          </div>
  
          <div className="button-container">
            {number > -5 &&<button className="btn decrease" onClick= {() =>{setNumber(number - 1);}}>decrease</button>} 
            <button className="btn reset" onClick= {() =>{setNumber(0);}}>reset</button>
            {number < 5 &&<button className="btn increase" onClick= {() =>{setNumber(number + 1);}}>increase</button>}
          </div>
        </div>

        </div>
        
      </main>

    </div>
  );
}

export default App;


