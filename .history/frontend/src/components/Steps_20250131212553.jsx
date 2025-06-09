import React from 'react'
import { assets,stepsData } from '../imagify-assets/assets/assets'
import { motion } from "motion/react"
function Steps() {
  
  return (
    <motion.div  initial={{opacity:0.2,y:100}} viewport={{once:true}} whileInView={{}} transition={{ duration:0.8}} className='text-[#545454] text-[15px] pt-4'>Generated images from imagifyclassName='flex flex-col items-center justify-center  pt-28 '>
      <p className='text-[40px] text-[#252525] font-[500] mb-2'>How it works</p>
      <p  className='text-[16px] text-[#797484] font-[400]' >Transform Words Into Stunning Images</p>
      <div className='flex flex-col gap-4 mt-14'>
        {stepsData.map((item)=>{
          return(
            <div className='flex items-center gap-3 pt-4 pb-8 pl-7 pr-12 bg-white shadow-md border-[1px] border-[#E1E1E1] rounded-[8px]'>
              <img className='w-[45px] h-[45px]' src={item.icon} alt="" />
              <div>
                <p className='text-[20px] text-[#000000] font-[400]'>{item.title}</p>
                <p className='text-[#7C7C7C] text-[15px]'>{item.description}</p>
              </div>

            </div>
          )
        })}
        
      </div>

      
    </motion.div>
  )
}

export default Steps
