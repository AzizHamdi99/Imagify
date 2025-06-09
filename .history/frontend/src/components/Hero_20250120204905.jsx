import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Hero() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex gap-2 bg-white border-[0.3px] border-[#7A7A7A] text-[#696969] px-7 py-1 rounded-[50px] items-center text-[15px] font-[400]'>
        <p>Best text to image generator</p>
        <img className='w-[13px] h-[13px]' src={assets.star_icon} alt="" />
      </div>
      <p className=' text-center text-[#252525] leading-tight text-[80px] w-[660px] '>Turn text to  <span className='text-[#007AFF]'>image</span>, in seconds.</p>
     <p>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>
      <div>
        <p>Generate Images</p>
        <img src={assets.star_group} alt="" />
      </div>
      <div>
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
      </div>
      <p>Generated images from imagify</p>
        
    </div>
  )
}

export default Hero
