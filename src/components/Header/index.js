import React from 'react'
import "./style.css";



const Header = () => {

  return (
    <div className=''>
       <div className='__header'>
       <div>
            <h2>Tresure Hunt</h2>
       </div>
       <div className='flex gap-3'>
            <span>userName</span>
            <span className="pi pi-user "></span>
       </div>
       </div>
    </div>
  )
}

export default Header
