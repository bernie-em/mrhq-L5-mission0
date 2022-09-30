import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Body from './Body.js';
import Footer from './Footer.js';

function App() {
  return (
      <div className='App'>
          <Navbar />
          <Hero />
          <Body />
          <Footer />
      </div>
  )
}

export default App;