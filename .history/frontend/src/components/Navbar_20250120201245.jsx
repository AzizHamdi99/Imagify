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
    <img src={assets.credit_star} alt="" />
    <p>Credits left: 5</p>
    <p>Hi! Aziz</p>
  </div>

  
  
  </div>}

      
    </div>
  )
}

export default Navbar
