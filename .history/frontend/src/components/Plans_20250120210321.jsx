import React from 'react'
import { assets,stepsData } from '../imagify-assets/assets/assets'
function Plans() {
  
  return (
    <div>
      <p>How it works</p>
      <p>Transform Words Into Stunning Images</p>
      <div>
        {stepsData.map((item)=>{
          return(
            <div>
              <img src={item.icon} alt="" />
              <div>
                <p>{item.}</p>
              </div>

            </div>
          )
        })}
        
      </div>

      
    </div>
  )
}

export default Plans
