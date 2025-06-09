import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Introduction() {
  return (
    <div>
      <p>Create AI Images</p>
      <p>Turn your imagination into visuals</p>
      <div>
        <img src={assets.sample_img_1} alt="" />
        <div>
          <p>Introducing the AI-Powered Text to Image Generator</p>
          <p></p>
        </div>


      </div>
      
    </div>
  )
}

export default Introduction
