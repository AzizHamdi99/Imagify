import React from 'react'
import { assets,stepsData } from '../imagify-assets/assets/assets'
function Steps() {
  
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <p className='text-[40px] text-[#252525] font-[500]'>How it works</p>
      <p  className='text-[16px] text-[#797484] font-[400]' >Transform Words Into Stunning Images</p>
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
