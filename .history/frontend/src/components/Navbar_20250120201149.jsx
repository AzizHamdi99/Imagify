import React, { useContext } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
function Navbar() {

const{showLogin,setShowLogin}=useContext(AppContext)
  return (
    <div> 
<img src={assets.logo} alt="" />
{!showLogin? <div>
  <p>Pricing</p>
  <p>Login</p>


</div>
  :
<div>
  <div>
    <img src={assets.star_icon} alt="" />
  </div>

  
  
  </div>}

      
    </div>
  )
}

export default Navbar
