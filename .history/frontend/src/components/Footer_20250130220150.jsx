import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Footer() {


  return (
    <div className='flex justify-between py-4 px-28 items-center bg-[#fff6f1]' >
      <div className='flex items-center gap-10 text-[16px] text-[#797484] font-[400]'>
        <img className='w-[144px] h-[38px]' src={assets.logo} alt="" />
        <p>|</p>
        <p>All right reserved. Copyright @imagify</p>
      </div>
      <div className='flex gap-3'>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Footer
