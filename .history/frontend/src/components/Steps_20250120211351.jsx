import React from 'react'
import { assets,stepsData } from '../imagify-assets/assets/assets'
function Steps() {
  
  return (
    <div className='flex flex-col items-center justify-center  mt-28'>
      <p className='text-[40px] text-[#252525] font-[500] mb-2'>How it works</p>
      <p  className='text-[16px] text-[#797484] font-[400]' >Transform Words Into Stunning Images</p>
      <div className='flex flex-col gap-3 mt-14'>
        {stepsData.map((item)=>{
          return(
            <div className='flex items-center gap-3 pt-4 pb-6 pl-7 pr-12 bg-white shadow-md border-[1px] border-[#E1E1E1] rounded-[8px]'>
              <img className='w-[45px] h-[45px]' src={item.icon} alt="" />
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
