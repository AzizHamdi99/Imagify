import React from 'react'
import { assets,plans } from '../imagify-assets/assets/assets'
function Plans() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <p className='text-[#515151] text-[14px] font-[400] py-1 px-4 bg-white border-[1px] border-[#C1C1C1] rounded-[50px]'>Our Plans</p>
      <p>Choose the plan</p>
      <div className='flex '>
        {plans.map((item)=>{
          return(
            <div>
              <img src={assets.logo_icon} alt="" />
              <p>{item.id}</p>
              <p>{item.desc}</p>
              <p>{item.desc}</p>
              <div>
                <p>${item.price}</p>
                <p>/{item.credits} credits</p>
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
