import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Hero() {
  return (
    <div>
      <div>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <p>Turn text to <br /> <span>image</span>, in seconds.</p>


      
    </div>
  )
}

export default Hero
