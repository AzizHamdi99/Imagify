import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Introduction() {
  return (
    <div className='flex items-center flex-col justify-center mt-36'>
      <p className='text-[40px] text-[#252525] font-[500]'>Create AI Images</p>
      <p>Turn your imagination into visuals</p>
      <div className='flex gap-9'>
        <img className='w-[393px] h-[393px]' src={assets.sample_img_1} alt="" />
        <div>
          <p>Introducing the AI-Powered Text to Image Generator</p>
          <p>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
    <p>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>      
          </div>


      </div>
      
    </div>
  )
}

export default Introduction
