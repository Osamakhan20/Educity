import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
      <div className='hero'>
          <div className="hero-text container">
              <h1>We ensure better education for a better world</h1>
              <p>Our cutting edge curriculum is designed to empowered students with the knowledge,skills and experience needs to skills in the dynamic field of technology</p>
              <button className='btn dark-btn'>Explore more <img src={dark_arrow} /></button>
          </div>
    </div>
  )
}

export default Hero