import React from 'react'

import { assets } from '../imagify-assets/assets/assets'

function Generate() {
  return (
    <form action="" className='flex items-center justify-center flex-col'>
      <div className='relative w-[356px] h-[356px]'>
        <img src={assets.sample_img_1} className='rounded-none' alt="" />
        <span className='h-1 bg-[#007AFF] absolute w-full transition-all duration-[10s]'></span>
        <p className='text-[#606060] text-[14px] font-[400] mt-1'>Loading.....</p>

      </div>
      <div className='mt-20 bg-[#6B6B6B]'>
        <input className='text-[14px] text-white bg-[#6B6B6B]' type="text" placeholder='Describe what you want to generate' />
        <button className='text-white text-[15px] font-[400] bg-[#1B1B1B]'>Generate</button>
      </div>


    </form>
  )
}

export default Generate
