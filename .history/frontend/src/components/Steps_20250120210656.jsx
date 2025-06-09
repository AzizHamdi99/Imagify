import React from 'react'
import { assets,stepsData } from '../imagify-assets/assets/assets'
function Steps() {
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <p>How it works</p>
      <p>Transform Words Into Stunning Images</p>
      <div>
        {stepsData.map((item)=>{
          return(
            <div>
              <img src={item.icon} alt="" />
              <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>

            </div>
          )
        })}
        
      </div>

      
    </div>
  )
}

export default Steps
