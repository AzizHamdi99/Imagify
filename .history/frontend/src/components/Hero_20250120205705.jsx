import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Hero() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex gap-2 bg-white border-[0.3px] border-[#7A7A7A] text-[#696969] px-7 py-1 rounded-[50px] items-center text-[15px] font-[400]'>
        <p>Best text to image generator</p>
        <img className='w-[13px] h-[13px]' src={assets.star_icon} alt="" />
      </div>
      <p className=' my-5 text-center text-[#252525] leading-none text-[80px] w-[660px] '>Turn text to  <span className='text-[#007AFF]'>image</span>, in seconds.</p>
     <p className='mt-2 text-[#545454] text-[18px] font-[400] text-center w-[570px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>
      <div className=' my-10 flex items-center gap-2 px-10 py-3  bg-black text-white rounded-[50px]'>
        <p>Generate Images</p>
        <img className='w-[29px] h-[29px]' src={assets.star_group} alt="" />
      </div>
      <div className='flex gap-4'>
        <img className='w-[77px] h-[77px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px]' src={assets.sample_img_2} alt="" />
        <img className='w-[77px] h-[77px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px]' src={assets.sample_img_2} alt="" />
        <img className='w-[77px] h-[77px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px]' src={assets.sample_img_2} alt="" />
      </div>
      <p>Generated images from imagify</p>
        
    </div>
  )
}

export default Hero
