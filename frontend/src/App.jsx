
import {Routes,Route}from'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Generate from './pages/Generate'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
function App() {
 
const{showLoginForm}=useContext(AppContext)
  return (
    <div>
      {showLoginForm? <Login/>:<></>}
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plans' element={<Plans/>} />
        <Route path='/generate' element={<Generate/>}/>



      </Routes>
      
    </div>
  )
}

export default App
