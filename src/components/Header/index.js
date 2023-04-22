import React from 'react'
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect } from 'react';


const Header = () => {

  
  const {isLogedIn,user,loading} = useSelector(state => state.auth);

  return (
    <div className=''>
       <div className='__header'>
       <div>
            <h2>Tresure Hunt</h2>
       </div>
       <div className='flex gap-3'>
            <span>{user?.email}</span>
            <span className="pi pi-user "></span>
       </div>
       </div>
    </div>
  )
}

export default Header
