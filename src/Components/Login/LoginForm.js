import React, { useState } from 'react'
import "./LoginForm.css"

function LoginForm({Login,error}) {
    const [details,setDetails] = useState({name:"",email:"",password:""})
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
      }

  return (
    <main>
        <form onSubmit={submitHandler}>
            
            <div className='Login'>
                <div className='box'>
                    <h1>LOGIN</h1>
                    {(error !=="")?(<div className='error'>{error}</div>):""}
                </div>
                <div className='box'>
                    <div className='form'>
                    <input type="text" name = "name" id="name" className="form__input"  autoComplete="off" placeholder=" " onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
                    <label htmlFor="email" className="form__label">你の名字</label>
                    </div>
                </div>
                <div className='box'>
                    <div className='form'>
                    <input type="text" id="email" className="form__input" autoComplete="off" placeholder=" " onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                    <label htmlFor="email" className="form__label">你の帳號</label>
                    </div>
                </div>
                <div className='box'>
                    <div className='form'>
                    <input type="password" name='password' id="passwordword" className="form__input" autoComplete="off" placeholder=" " onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                    <label htmlFor="password" className="form__label">汝密碼，吾收之</label>
                    </div>
                </div>
                <div className='box'>
                    <div className='boxer' method="post">
                    <input type="submit" name="" value="LOGIN"></input>
                    </div>
                </div>
            </div>
            
        </form>
    </main>
  )
}

export default LoginForm