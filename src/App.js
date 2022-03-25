import './App.css';
import React,{useState} from "react"
import LoginForm from './Components/Slider/LoginForm.js';
import Slider from './Components/Slider/Slider';


function App() {

  const [number, setNumber] =useState(0)
  const adminUser ={
    email:"1209436216@gmail.com",
    password:"123456"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");
  const Login = details =>{
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
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

  return (
    <div className="App">
      {(user.email !=="")?(
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

        <Slider />

      </main>
    </div>
  );
}export default App;


