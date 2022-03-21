import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"

import LoginForm from './Components/Slider/LoginForm.js';
import BtnSlider from './Components/Slider/BtnSlider.js';
import dataSlider from './Components/Slider/dataSlider';


function App() {

  const [number, setNumber] =useState(0)
  const [slideIndex, setSlideIndex] = useState(1)

  const adminUser ={
    email:"1209436216@gmail.com",
    password:"123456"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");
  const Login = details =>{
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log(" Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  
  }
  const Logout = () =>{
    setUser({name:"",email:""});
  }


  const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === dataSlider.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(dataSlider.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
    <div className="App">
      {(user.email !="")?(
        <div className='Welcome'>
          <h2> Welcome,<span>{user.name}</span></h2>
            <div className='box2'>
              <button className='logout' onClick={Logout}>Logout</button>
            </div>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
      <main>

        <div className='row'>

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

        <div className='picture'>
          <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                  <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                  >
                      <img 
                      src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                      />
                  </div>
                )
            })}
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
              <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

              <div className="container-dots">
                  {Array.from({length: 5}).map((item, index) => (
                      <div 
                      onClick={() => moveDot(index + 1)}
                      className={slideIndex === index + 1 ? "dot active" : "dot"}
                      ></div>
                  ))}
              </div>
          </div>
        </div>

      </main>

    </div>
  );
}export default App;


