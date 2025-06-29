import React, { useContext } from 'react'
import { assets } from '../imagify-assets/assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
function Hero() {

const navigate=useNavigate()
const{showLoginForm,setShowLoginForm,token}=useContext(AppContext)

const onclickHandler=()=>{
  if(localStorage.getItem('token')){
    navigate('/generate')
  }
  else{
    setShowLoginForm(!showLoginForm)
  }


}

  return (
    <motion.div className='flex items-center justify-center flex-col pt-28 ' initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <motion.div
      initial={{opacity:0,y:-20}} transition={{duration:0.8, delay:0.2}} animate={{opacity:1,y:0}} 
       className='flex gap-2 bg-white border-[0.3px] border-[#7A7A7A] text-[#696969] px-9 py-2 rounded-[50px] items-center text-[15px] font-[400]'>
        <p>Best text to image generator</p>
        <img className='w-[13px] h-[13px]' src={assets.star_icon} alt="" />
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:2}}>
      <p className=' my-5 text-center text-[#252525] leading-none text-[80px] w-[660px] '>Turn text to  <span className='text-[#007AFF]'>image</span>, in seconds.</p>
      </motion.div>
     <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6, duration:0.8}} className='mt-2 text-[#545454] text-[18px] font-[400] text-center w-[570px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>
     
      <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}} transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}} onClick={onclickHandler} className=' my-10 flex items-center gap-2 px-10 py-3  bg-black text-white rounded-[50px] cursor-pointer'>
        <p>Generate Images</p>
        <img className='w-[29px] h-[29px]' src={assets.star_group} alt="" />
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1}} className='flex gap-4 mt-10'>
        <motion.img whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <motion.img whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
        <motion.img whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <motion.img  whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
        <motion.img whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_1} alt="" />
        <motion.img whileHover={{scale:1.05,duration:0.1}} className='w-[77px] h-[77px] rounded-[6px]' src={assets.sample_img_2} alt="" />
      </motion.div>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:0.8}} className='text-[#545454] text-[15px] pt-4'>Generated images from imagify</motion.p>
        
    </motion.div>
  )
}

export default Hero
