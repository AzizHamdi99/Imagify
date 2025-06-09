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
            </div>
          )
        })}

      </div>

      
    </div>
  )
}

export default Plans
