import React from 'react'
import { assets,testimonialsData } from '../imagify-assets/assets/assets'
function Avis() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p>Customer testimonials</p>
      <p>What Our Users Are Saying</p>
      <div className='flex gap-10'>
        {testimonialsData.map((item)=>{
          return(
            <div>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.role}</p>
              {[...Array(item.stars)].map((i)=>{
                return(
                  <img src={assets.rating_star} alt="" />
                )
              })}
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Avis
