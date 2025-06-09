import React from 'react'
import { assets,plans } from '../imagify-assets/assets/assets'
function Plans() {
  return (
    <div className='flex items-center justify-center flex-col pt-20 bg-[#f2fff8]'>
      <p className='text-[#515151] text-[14px] font-[400] py-2 px-9 bg-[#F7FBFF]  border-[1px] border-[#C1C1C1] rounded-[50px]'>Our Plans</p>
      <p className='text-[#252525] text-[35px] font-[500] my-9'>Choose the plan</p>
      <div className='flex items-center gap-10 '>
        {plans.map((item)=>{
          return(
            <div className='bg-white border-[1px] border-[#EDEDED] p-8 rounded-[10px] shadow-lg text-[#515151]'>
              <img  className='w-[31px] h-[31px] ' src={assets.logo_icon} alt="" />
              <p className=' text-[20px] font-[500] mt-3 mb-2'>{item.id}</p>
              <p className='text-[15px] font-[400]'>{item.desc}</p>
          
              <div className='flex items-center gap-2 my-5'>
                <p className='text-[34px] font-[500]'>${item.price}</p>
                <p className='text-[14px] font-[400]'>/{item.credits} credits</p>
              </div>
              <p>Get started</p>
            </div>
          )
        })}

      </div>

      
    </div>
  )
}

export default Plans
