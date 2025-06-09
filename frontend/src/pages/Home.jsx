import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Introduction from '../components/Introduction'
import Avis from '../components/Avis'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className='bg-gradient-to-b from-[#f4fff9] to-[#fef6f1] '>
        <Hero/>
        <Steps/>
        <Introduction/>
        <Avis/>
        <Footer/>
        
      
    </div>
  )
}

export default Home
