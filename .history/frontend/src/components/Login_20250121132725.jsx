import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Login() {
  return (
    <div>
        <p>Login</p>
        <p>Welcome back! Please sign in to continue </p>
        <div>
            <img src={assets.profile_icon} alt="" />

        </div>
      
    </div>
  )
}

export default Login
