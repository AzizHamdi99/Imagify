import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Login() {
  return (
    <div className='absolute flex items-center justify-center flex-col top-0 left-0 z-10 right-0 backdrop-blur-sm bg-black/30 h-full'>
        <form action="" className='bg-white text-center p-10'>
            <p className='text-[#444444] text-[28px] font-[500]'>Login</p>
        <p>Welcome back! Please sign in to continue</p>
        <div className='flex items-center gap-3'>
            <img className='h-[13px] w-[13px] ' src={assets.profile_icon} alt="" />
            <div className='flex items-center gap-2'>
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder='Email id' />
            </div>

        </div>
        <div className='flex items-center gap-2'>
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
