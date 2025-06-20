import React, { useContext, useState } from 'react'
import { assets } from '../imagify-assets/assets/assets'
import { AppContext } from '../context/AppContext'
import axios from'axios'
function Login() {
    const {showLoginForm,setShowLoginForm,token,setToken,showLogin,setShowLogin,user,setUser,fetchcredits,credits,setCredits}=useContext(AppContext)
    const [register,setRegister]=useState('login')
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

    const sentData=async(event)=>{
        event.preventDefault(); 
        if(register=='login'){
            let info ={
                email:email,
                password:password
            }
            try{
                const response=await axios.post('http://localhost:3000/api/user/login',info)
                const{token}=response.data
                localStorage.setItem("token",token)
                setToken(token)
                setShowLoginForm(false)
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user)
                fetchcredits()
                setCredits(response.data.user.credits)
                
                setEmail("")
                setpassword("")
                setShowLogin(false)

            }catch(error){
                console.log(error)



            }
        }else{



            let info ={
                name:name,
                email:email,
                password:password
            }
            try{
                const response=await axios.post('http://localhost:3000/api/user/register',info)
                const{token}=response.data
                localStorage.setItem("token",token)
                setToken(token)
                setShowLoginForm(false)
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user)
                fetchcredits()
                setEmail("")
                setpassword("")
                setName("")
                setShowLogin(false)

            }catch(error){
                console.log(error)



            }
        }

    }







  return (
    <div className='fixed flex items-center justify-center flex-col top-0 left-0 z-10 right-0 backdrop-blur-sm bg-black/30 h-full'>
        {register=='login'?   
        <form onSubmit={sentData} action="" className='bg-white text-center p-10 relative rounded-[15px]'>
            <img onClick={()=>setShowLoginForm(false)} src={assets.cross_icon} className=' absolute top-5 right-5 cursor-pointer' alt="" />
            <p className='text-[#444444] text-[28px] font-[500] mb-2'>Login</p>
        <p className='text-[#575B86] text-[14px] font-[400] mb-7'>Welcome back! Please sign in to continue</p>
        
            <img className='left-3 top-[143px] absolute h-[25px] w-[25px] border-[1px] border-[#B9B9B9] rounded-[50px] ' src={assets.profile_icon} alt="" />
            <div className='flex items-center gap-2 border-[1px] py-2 px-7 rounded-[50px] mb-5 border-[#D3D3D3]'>
                <img src={assets.email_icon} alt="" />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className='outline-none text-[#B9B9B9] text-[14px] font-[400]' placeholder='Email id' />
            </div>

        
        <div className='flex items-center gap-2 border-[1px] border-[#D3D3D3] py-2 px-7 rounded-[50px]'>
                <img src={assets.lock_icon} alt="" />
                <input onChange={(e)=>setpassword(e.target.value)} type="password" className='outline-none text-[#B9B9B9] text-[14px] font-[400]'  placeholder='Password' />
            </div>
            <p className='text-[#007AFF] text-[14px] font-[400] text-left mt-7'>Forgot password?</p>
            <button type='submit' className='bg-[#007AFF] text-[16px] font-[400] py-2 px-32 text-white rounded-[50px] mt-3'>Login</button>
            <p className='text-[15px] text-[#B9B9B9] font-[400] my-3 cursor-pointer' >Don’t have an account?<span onClick={()=>setRegister('signup')} className='text-[#007AFF] underline '> Sign up</span></p>
        </form>
            
            :
            
            <form onSubmit={sentData} action="" className='bg-white text-center p-10 relative rounded-[15px]'>
            <img onClick={()=>setShowLoginForm(false)} src={assets.cross_icon} className=' absolute top-5 right-5 cursor-pointer' alt="" />
            <p className='text-[#444444] text-[28px] font-[500] mb-2'>Sign up</p>
        <p className='text-[#575B86] text-[14px] font-[400] mb-7'>Welcome back! Please sign in to continue</p>
        
            
            <div className='flex items-center gap-2 border-[1px] py-2 px-6 rounded-[50px] mb-5 border-[#D3D3D3]'>
                <img className='h-[25px] w-[25px]' src={assets.profile_icon} alt="" />
                <input onChange={(e)=>setName(e.target.value)} type="text" className='outline-none text-[#B9B9B9] text-[14px] font-[400]' placeholder='Full name' />
            </div>
            <div className='flex items-center gap-2 border-[1px] py-2 px-7 rounded-[50px] mb-5 border-[#D3D3D3]'>
                <img src={assets.email_icon} alt="" />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className='outline-none text-[#B9B9B9] text-[14px] font-[400]' placeholder='Email id' />
            </div>

        
        <div className='flex items-center gap-2 border-[1px] border-[#D3D3D3] py-2 px-7 rounded-[50px]'>
                <img src={assets.lock_icon} alt="" />
                <input onChange={(e)=>setpassword(e.target.value)} type="password" className='outline-none text-[#B9B9B9] text-[14px] font-[400]'  placeholder='Password' />
            </div>
            <p className='text-[#007AFF] text-[14px] font-[400] text-left mt-7'>Forgot password?</p>
            <button type='submit' className='bg-[#007AFF] text-[16px] font-[400] py-2 px-32 text-white rounded-[50px] mt-3'>Create account</button>
            <p className='text-[15px] text-[#B9B9B9] font-[400] my-3 cursor-pointer' >Don’t have an account?<span onClick={()=>setRegister('login')} className='text-[#007AFF] underline '> Login</span></p>
            </form>}
      

      
    </div>
  )
}

export default Login
