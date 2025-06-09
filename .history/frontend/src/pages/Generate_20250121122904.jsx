import React from 'react'

import { assets } from '../imagify-assets/assets/assets'

function Generate() {
  return (
    <form action="">
      <div className='relative'>
        <img src={assets.sample_img_1} className='rounded-none' alt="" />
        <span className='h-1 bg-[#007AFF] absolute w-full transition-all duration-[10s]'></span>

      </div>


    </form>
  )
}

export default Generate
