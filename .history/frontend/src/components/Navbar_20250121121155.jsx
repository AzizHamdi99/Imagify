import React, { useContext } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
import { useNavigate } from 'react-router-dom'
function Navbar() {



const navigate=useNavigate()
const{showLogin,setShowLogin}=useContext(AppContext)


  return (
    <div className='flex justify-between py-4 px-28 items-center bg-[#f2fff8]'> 
<img  className='w-[144px] h-[38px]' src={assets.logo} alt="" />
{showLogin? <div className='flex gap-8 items-center font-[400] text-[15px] '>
  <p className='text-[#545454]'>Pricing</p>
  <p className='rounded-[50px] bg-black px-12 py-2 text-white  text-center items-center'>Login</p>


</div>
  :
<div >
  <div className='flex gap-4 items-center cursor-pointer ' onClick={()=>navigate('/plans')}>
    <div className='bg-[#D7EBFF] flex gap-2 p-3 px-5 rounded-[50px]'>
    <img className='w-[23px] h-[23px]'  src={assets.credit_star} alt="" />
    <p>Credits left: 5</p>
    </div>
    
    <p>Hi! Aziz</p>
    <img className=' cursor-pointer h-[45px] w-[45px] shadow-md rounded-[50%]' src={assets.profile_icon} alt="" />
  </div>

  
  
  </div>}

      
    </div>
  )
}

export default Navbar
