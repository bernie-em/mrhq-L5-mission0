import React from 'react';
import heroImg from './minecraft.png';
import './Hero.css';

function Hero () {
  return (
    <div className='hero-container'>

      <div className='hero-img'>
        <img src={heroImg} className='hero-img'/>
      </div>

      <div className='hero-text'>
        <h1>Dream it. Believe it. Build it.</h1>
      </div>

      <div className='search-bar-lockup'>
        <input style={{width:'550px', height:'60px', border:'none'}} type='text' id='search' placeholder='   SEARCH VIDEOS / CHEATS / SKINS'></input>
        <button style={{width:'100px', height:'60px', background:'green', color:'white', fontWeight:'bold', border:'none', cursor:'pointer'}}>SEARCH</button>
      </div>

    </div>
  )
}

export default Hero;
