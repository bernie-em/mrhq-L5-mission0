import React from 'react';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {

  return (
    <div className='navbar'>
      
      <div className='nav-left'>
        <img src={logo} className='logo' /> 
      </div>  

      <div className='nav-left-text'>
        <p>sirenhead</p>
      </div>  

      <div className="nav-right">
        <a>Watch</a>
        <a>Build</a>
        <a>Play</a>
        <a>Shop</a>
        <a style={{border:'2px solid white', height:'25%', borderRadius: '2px'}}>Login</a>
      </div> 




    </div>
  )
}

export default Navbar;