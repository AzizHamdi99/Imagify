import React, { useContext, useState } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
import { useNavigate } from 'react-router-dom'
function Navbar() {



const navigate=useNavigate()
const{showLogin,setShowLogin,showLoginForm,setShowLoginForm}=useContext(AppContext)
const changes=()=>{
 
  setShowLoginForm(true)
  
}
const[showLogOut,setShowLogOut]=useState(false)


  return (
    <div className='flex justify-between py-4 px-28 items-center bg-[#f2fff8]'> 
<img onClick={()=>navigate('/')} className=' w-[144px] h-[38px] cursor-pointer' src={assets.logo} alt="" />
{showLogin? <div className='flex gap-8 items-center font-[400] text-[15px] '>
  <p onClick={()=>navigate('plans')} className='text-[#545454] cursor-pointer'>Pricing</p>
  <p onClick={changes} className='rounded-[50px] bg-black px-12 cursor-pointer py-2 text-white  text-center items-center'>Login</p>


</div>
  :
<div >
  <div className='flex gap-4 items-center cursor-pointer ' >
    <div className='bg-[#D7EBFF] flex gap-2 p-3 px-5 rounded-[50px]' onClick={()=>navigate('/plans')}>
    <img className='w-[23px] h-[23px]'  src={assets.credit_star} alt="" />
    <p>Credits left: 5</p>
    </div>
    
    <p>Hi! Aziz</p>
    <img onClick={()=>setShowLogOut(!showLogOut)} className=' cursor-pointer h-[45px] w-[45px] shadow-md rounded-[50%]' src={assets.profile_icon} alt="" />
    {showLogOut? <div className=' absolute top-20 right-32 bg-white px-8 py-2 font-medium'>
      <p>Logout</p>
    </div>:<></>}
  </div>

  
  
  </div>}

      
    </div>
  )
}

export default Navbar
