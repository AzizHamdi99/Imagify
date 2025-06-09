import React from 'react'
import { assets,plans } from '../imagify-assets/assets/assets'
function Plans() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <p>Our Plans</p>
      <p>Choose the plan</p>
      <div>
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
