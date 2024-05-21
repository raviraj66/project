import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1> <span>If you can imagine it </span>, we can
          <br /> build it.</h1>
        <p>We are a people-oriented,progressive business,
          driven by our values to deliver and lasting change for 
          our communites.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero
