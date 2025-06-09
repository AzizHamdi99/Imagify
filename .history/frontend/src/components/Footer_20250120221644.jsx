import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Footer() {
  return (
    <div className='flex justify-between my-4 mx-28 items-center' >
      <div className='flex items-center gap-8 '>
        <img src={assets.logo} alt="" />
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
