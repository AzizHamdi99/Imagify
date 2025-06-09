import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Login() {
  return (
    <div className='absolute flex items-center justify-center flex-col top-0 left-0 z-10 right-0 backdrop-blur-sm bg-black/30 h-full'>
        <form action=""><p className='text-[#444444] text-[28px] font-[500]'>Login</p>
        <p>Welcome back! Please sign in to continue</p>
        <div>
            <img className='h-[12px] w-[12px] ' src={assets.profile_icon} alt="" />
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
            </form>

      
    </div>
  )
}

export default Login
