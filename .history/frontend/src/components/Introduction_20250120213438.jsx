import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Introduction() {
  return (
    <div className='flex items-center flex-col justify-center mt-36'>
      <p className='text-[40px] text-[#252525] font-[500]'>Create AI Images</p>
      <p className='text-[16px] text-[#797484] font-[400]'>Turn your imagination into visuals</p>
      <div className='flex gap-9 my-16'>
        <img className='w-[393px] h-[393px]' src={assets.sample_img_1} alt="" />
        <div className='flex flex-col gap-6'>
          <p className='text-[28px] text-[#4B445A] font-[500] w-[546px]'>Introducing the AI-Powered Text to Image Generator</p>
          <p className='text-[16px] text-[#797484] font-[400] w-[546px]'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
    <p className='text-[16px] text-[#797484] font-[400] w-[546px]'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>      
          </div>


      </div>
      
    </div>
  )
}

export default Introduction
