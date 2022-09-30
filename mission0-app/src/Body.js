import React from 'react';
import './Body.css';

//images
import Img1 from './img-1.webp';
import Img2 from './img-2.webp';
import Img3 from './img-3.webp';

function Body () {
  return (
    <div className='body-container'>

        <div className='block'>
            <img src={Img1} alt='Img1' class='image' />
            <div className='text-container'>
              <h2>Watch</h2>
              <h4>Explore different worlds</h4>
            </div>
        </div>

        <div className='block'>
            <img src={Img2} alt='Img1' class='image'/>
            <div className='text-container'>
              <h2>Build</h2>
              <h4>Craft all day</h4>
            </div>

        </div>

        <div className='block'>
            <img src={Img3} alt='Img1' class='image' />
            <div className='text-container'>
              <h2>Play</h2>
              <h4>Play action adventures</h4>
            </div>
        </div>

    </div>
  )
}

export default Body;
