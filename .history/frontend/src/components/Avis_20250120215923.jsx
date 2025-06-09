import React from 'react'
import { assets,testimonialsData } from '../imagify-assets/assets/assets'
function Avis() {
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <p className='text-[40px] text-[#252525] font-[500] mb-2'>Customer testimonials</p>
      <p className='text-[16px] text-[#797484] font-[400]'>What Our Users Are Saying</p>
      <div className='flex gap-10 text-center items-center justify-center '>
        {testimonialsData.map((item)=>{
          return(
            <div className=' flex flex-col justify-center items-center'>
              <img className='h-[42px] w-[42px]' src={item.image} alt="" />
              <p className='text-[18px] text-[#4B445A] font-[500]'>{item.name}</p>
              <p className='text-[13px] text-[#62577B] font-[500]'>{item.role}</p>
              <div className='flex '>
              {[...Array(item.stars)].map((i)=>{
                return(
                  
                  <img src={assets.rating_star} alt="" />
                  
                )
              })}
              </div>
              <p className='text-[16px] text-[] font-[400]'>{item.text}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Avis
