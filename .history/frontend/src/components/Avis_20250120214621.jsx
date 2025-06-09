import React from 'react'
import { assets,testimonialsData } from '../imagify-assets/assets/assets'
function Avis() {
  return (
    <div>
      <p>Customer testimonials</p>
      <p>What Our Users Are Saying</p>
      <div>
        {testimonialsData.map((item)=>{
          return(
            <div>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.role}</p>
              {[...Array()]}
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Avis
