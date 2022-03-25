import './App.css';
import React,{useState} from "react"
import LoginForm from './Components/Slider/LoginForm.js';
import Yeah from './Components/Yeah'

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
        <main>
          <div className='Welcome'>
            <h2> Welcome,<span>{user.name}</span></h2>
            <div className='box2'>
              <button className='logout' onClick={Logout}>Logout</button>
            </div>
          </div>
          <Yeah number={number} setNumber={setNumber} />
        </main>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}
export default App;


