import React, { useContext } from 'react'
import{assets} from'../imagify-assets/assets/assets'
import{AppContext} from'../context/AppContext'
function Navbar() {

const{showLogin,setShowLogin}=useContext(AppContext)
  return (
    <div> 
<img src={assets.logo} alt="" />
{showLogin? <div>
  <p>Pricing</p>
  <p></p>


</div>
  :
<div>
  
  
  </div>}

      
    </div>
  )
}

export default Navbar
