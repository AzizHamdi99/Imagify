import React, { useState } from 'react'

import { assets } from '../imagify-assets/assets/assets'
import Footer from '../components/Footer'

function Generate() {

  const[download,setDownload]=useState(true)

  return (
    <form action="" className='flex items-center justify-center flex-col bg-[#f2fff8] h-screen'>
      <div className='relative w-[356px] h-[356px]'>
        <img src={assets.sample_img_1} className='rounded-none' alt="" />
        <span className='h-1 bg-[#007AFF] absolute w-full transition-all duration-[10s]'></span>
        <p className='text-[#606060] text-[14px] font-[400] mt-1'>Loading.....</p>

      </div>
      {!download&&
      <div className='mt-12 bg-[#6B6B6B] rounded-[50px] w-[651px] h-[56px] flex items-center justify-between '>
        <input className='text-[14px] w-[289px] h-[26px] px-7 text-white rounded-[50px] outline-none bg-[#6B6B6B]' type="text" placeholder='Describe what you want to generate' />
        <button className='text-white rounded-[50px] text-[15px] font-[400] bg-[#1B1B1B] border-[1px] border-[#000000] w-[195px] h-[50px] mr-[3px]'>Generate</button>
      </div>
      }
      {download&&
      <div className='mt-12 flex items-center justify-between gap-8 '>
          <button className='border-[1px] border-black py-2 px-9 rounded-[50px] font-[500]'>Generate Another</button>
          <button className='border-[1px] border-black py-2 px-9 rounded-[50px] font-[500]'>Download</button>
      </div>
      }


    </form>
  )
}

export default Generate
