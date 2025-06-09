import React from 'react'
import { assets } from '../imagify-assets/assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
function Hero() {

const navigate=useNavigate()

  return (
    <motion.div className='flex items-center justify-center flex-col pt-28 ' initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <motion.div
      initial={{opacity:0,y:-20}} transition={{duration:0.8, delay:0.2}} animate={{opacity:1,y:0}} 
       className='flex gap-2 bg-white border-[0.3px] border-[#7A7A7A] text-[#696969] px-9 py-2 rounded-[50px] items-center text-[15px] font-[400]'>
        <p>Best text to image generator</p>
        <img className='w-[13px] h-[13px]' src={assets.star_icon} alt="" />
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>
      <p className=' my-5 text-center text-[#252525] leading-none text-[80px] w-[660px] '>Turn text to  <span className='text-[#007AFF]'>image</span>, in seconds.</p>
     <p className='mt-2 text-[#545454] text-[18px] font-[400] text-center w-[570px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>
     </motion.div>
      <div onClick={()=>navigate("/generate")} className=' my-10 flex items-center gap-2 px-10 py-3  bg-black text-white rounded-[50px] cursor-pointer'>
        <p>Generate Images</p>
        <img className='w-[29px] h-[29px]' src={assets.star_group} alt="" />
      </div>
      <div className='flex gap-4 mt-10'>
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <img className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
      </div>
      <p className='text-[#545454] text-[15px] pt-4'>Generated images from imagify</p>
        
    </motion.div>
  )
}

export default Hero
