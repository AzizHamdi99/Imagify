import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Login() {
  return (
    <div>
        <p>Login</p>
        <p>Welcome back! Please sign in to continue </p>
        <div>
            <img src={assets.profile_icon} alt="" />
            <div>
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder='Email id' />
            </div>

        </div>
        <div>
                <img src={assets.lock_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
            <p>Forgot password?</p>
            <button>Login</button>
            <p>Don’t have an account?<span> Sign up</span></p>

      
    </div>
  )
}

export default Login
