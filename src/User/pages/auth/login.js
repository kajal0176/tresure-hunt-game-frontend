import React from 'react'
import "./style.css";
const Login = () => {
  return (
    <div>
     <div className='login'>
         <div className='loginWrapper'>
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
         </div>
      </div>
    </div>
  )
}

export default Login
