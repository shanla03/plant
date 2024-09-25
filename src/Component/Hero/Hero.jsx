import React from 'react'
import img2 from '../../Assets/heroimg.jpg'
import './Hero.css';

  

export default function Hero() {
  return (
    
    <div className="hero">
        <div className="hero-left">
            <h1>NEW ARRIVALS ONLY</h1>
        <div className="hero-text">
            <p>Collections</p>
            <p>For Everyone</p>
            </div>

        <div className="hero-latest-btn">
            <div>Latest Collection</div>

            </div>

        </div>
        <div className="hero-right">
            <img src={img2} alt="Hero"/>
        </div>
      
    </div>
  )
}
