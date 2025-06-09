import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
function Login() {
  return (
    <div className='absolute flex items-center justify-center flex-col top-0 left-0 z-10 right-0 backdrop-blur-sm bg-black/30 h-full'>
        <form action="" className='bg-white text-center p-10 relative'>
            <p className='text-[#444444] text-[28px] font-[500] mb-2'>Login</p>
        <p className='text-[#575B86] text-[14px] font-[400] mb-6'>Welcome back! Please sign in to continue</p>
        
            <img className='left-4 top-[140px] absolute h-[25px] w-[25px] ' src={assets.profile_icon} alt="" />
            <div className='flex items-center gap-2 border-[1px] py-2 px-7 rounded-[50px] mb-5 border-[#D3D3D3]'>
                <img src={assets.email_icon} alt="" />
                <input type="email" className='outline-none text-[#B9B9B9] text-[14px] font-[400]' placeholder='Email id' />
            </div>

        
        <div className='flex items-center gap-2 border-[1px] border-[#D3D3D3] py-2 px-7 rounded-[50px]'>
                <img src={assets.lock_icon} alt="" />
                <input type="password" className='outline-none text-[#B9B9B9] text-[14px] font-[400]'  placeholder='Password' />
            </div>
            <p className='text-[#007AFF] text-[14px] font-[400] text-left mt-7'>Forgot password?</p>
            <button className='bg-[#007AFF] text-[16px] font-[400] py-2 px-12 mt-7'>Login</button>
            <p>Don’t have an account?<span> Sign up</span></p>
            </form>

      
    </div>
  )
}

export default Login
