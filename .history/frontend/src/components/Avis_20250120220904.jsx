import React from 'react'
import { assets,testimonialsData } from '../imagify-assets/assets/assets'
function Avis() {
  return (
    <div className='flex flex-col items-center justify-center mt-28'>
      <p className='text-[40px] text-[#252525] font-[500] mb-2'>Customer testimonials</p>
      <p className='text-[16px] text-[#797484] font-[400]'>What Our Users Are Saying</p>
      <div className='flex gap-10 text-center items-center justify-center my-12 '>
        {testimonialsData.map((item)=>{
          return(
            <div className=' flex flex-col justify-center items-center border-[1px] border-[#E1E1E1] py-10 px-8 shadow-md rounded-[8px]'>
              <img className='h-[42px] w-[42px] mb-2' src={item.image} alt="" />
              <p className='text-[18px] text-[#4B445A] font-[500]'>{item.name}</p>
              <p className='text-[13px] text-[#62577B] font-[500] '>{item.role}</p>
              <div className='flex my-4'>
              {[...Array(item.stars)].map((i)=>{
                return(
                  
                  <img src={assets.rating_star} alt="" />
                  
                )
              })}
              </div>
              <p className='w-[289px] text-[16px] text-[#797484] font-[400]'>{item.text}</p>
              
            </div>
          )
        })}
        
      </div>
      <p className='text-[40px] text-[#252525] font-[500]'>See the magic. Try now</p>
      <div className=' my-10 flex items-center gap-2 px-10 py-3  bg-black text-white rounded-[50px] mt-20'>
              <p>Generate Images</p>
              <img className='w-[29px] h-[29px]' src={assets.star_group} alt="" />
            </div>
      
    </div>
  )
}

export default Avis
