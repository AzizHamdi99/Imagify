import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Footer() {
  return (
    <div>
      <div>
        <img src={assets.logo} alt="" />
        <p>|</p>
        <p>All right reserved. Copyright @imagify</p>
      </div>
      <div>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.email_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Footer
