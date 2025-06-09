
import {Routes,Route}from'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Plans from './pages/Plans'
function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plans' element={<Plans/>} />



      </Routes>
      <Footer/>
    </div>
  )
}

export default App
