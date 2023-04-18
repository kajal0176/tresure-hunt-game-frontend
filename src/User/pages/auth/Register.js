import React from 'react'
import "./style.css";


import { Button } from 'primereact/button';
        
const Register = () => {

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
            <input placeholder="Confirm Password"
             required 
             
             className="loginInput"
             type="password" 
             />
             
              <Button  label="Submit" severity="info" />
              <Button  label="Login" severity="success" />
          
          </form>
         </div>
      </div>
    </div>
  )
}

export default Register
