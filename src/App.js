import logo from './logo.svg';
/*import './App.css';
import {useState} from "react"

function App() {
  const [number, setNumber] =useState(0)
  const slider_span1 = props  => {
    <div id = {props.id}> something </div>
   }
  return (
    <div className="App">
      <main>

        <div className='row'>
          <div className='Login'>
            <div className='box'>
              <h1>LOGIN</h1>
            </div>
            <div className='box'>
              <div class='form'>
                <input type="text" id="email" class="form__input" autoComplete="off" placeholder=" "/>
                <label for="email" class="form__label">你の帳號</label>
              </div>
            </div>
            <div className='box'>
              <div class='form'>
                <input type="password" id="word" class="form__input" autoComplete="off" placeholder=" "/>
                <label for="word" class="form__label">汝密碼，吾收之</label>
              </div>
            </div>
            <div className='box'>
              <div className='boxer' method="post">
                <input type="submit" name="" value="Login"></input>
              </div>
            </div>
          </div>
          <div className="container">
            <h1>COUNTER</h1>
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
          <div className='flex'>
              <span class="slider-span" id="slider-span1"></span>
              <span class="slider-span" id="slider-span2"></span>

              <div class="img-slider">
                <div class="slides-div" id="slide-1">
                  <img src={require('kick00.png')} alt="" class="img1" id="img1"></img>
                  <button class="button1" id="button-1"></button>
                </div>
              </div>
              <div class="img-slider">
                <div class="slides-div" id="slide-2">
                  <img src={require('runback00.png')} alt="" class="img2" id="img2"></img>
                    <button class="button2" id="button-2"></button>
                </div>
            </div>
            
          </div>
        
        </div>
      </main>

    </div>
  );
}
*/
import './App.css';
import Slider from'./Components/Slider/Slider.js';

function App() {
return(
<>
<Slider/>
</>
);
}

export default App;


