import React from 'react'
import { assets,plans } from '../imagify-assets/assets/assets'
function Plans() {
  return (
    <div>
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
                <p>${item.price}</p>
              </div>
            </div>
          )
        })}

      </div>

      
    </div>
  )
}

export default Plans
