import React, { useContext } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
function Navbar() {

const{showLogin,setShowLogin}=useContext(AppContext)
  return (
    <div> 
<img src={assets.logo} alt="" />

      
    </div>
  )
}

export default Navbar
