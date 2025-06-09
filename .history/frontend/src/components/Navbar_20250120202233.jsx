import React, { useContext } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
function Navbar() {

const{showLogin,setShowLogin}=useContext(AppContext)
  return (
    <div className='flex justify-between my-3 mx-28 items-center'> 
<img className='w-[144px] h-[38px]' src={assets.logo} alt="" />
{showLogin? <div className='flex gap-8 items-center'>
  <p>Pricing</p>
  <p className='rounded-[50px] bg-black px-10 py-2 text-white text-[15px]  text-center items-center'>Login</p>


</div>
  :
<div>
  <div>
    <img  src={assets.credit_star} alt="" />
    <p>Credits left: 5</p>
    <p>Hi! Aziz</p>
    <img className='h-[45px] w-[45px]' src={assets.profile_icon} alt="" />
  </div>

  
  
  </div>}

      
    </div>
  )
}

export default Navbar
