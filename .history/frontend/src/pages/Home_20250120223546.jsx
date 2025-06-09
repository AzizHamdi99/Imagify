import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Introduction from '../components/Introduction'
import Avis from '../components/Avis'


function Home() {
  return (
    <div className='bg-gradient-to-b from-green-400 to-red-700 '>
        <Hero/>
        <Steps/>
        <Introduction/>
        <Avis/>
      
    </div>
  )
}

export default Home
