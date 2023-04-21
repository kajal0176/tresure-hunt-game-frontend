import React from 'react'
import "./style.css";
import { Card } from 'primereact/card';


const Login = () => {


  return (
    <div>
     <div className='w-11 login'>
         <Card >
         <form className="loginBox" >
           
            <input placeholder="Email"
             required 
            
             
             className="loginInput" 
             type="email"
             />
            <input placeholder="Password"
             required 
             
             minLength={6}
             className="loginInput" 
             type="password"
             />
            <button className="loginButton" type="submit">login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
         </Card>
      </div>
    </div>
  )
}

export default Login
