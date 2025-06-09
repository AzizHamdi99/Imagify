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
          <p>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
    <p></p>      
          </div>


      </div>
      
    </div>
  )
}

export default Introduction
