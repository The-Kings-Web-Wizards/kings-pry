import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './Pages/Home'
import  About from './Pages/About'
import  Enroll from './Pages/Enroll'
import  Events from './Pages/Events'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {
  

  return (
    <>

    <Navbar/>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/him" element={<Events />} />
        <Route path="/about" element={<About />} />
     
       
      </Routes>
    <Footer/>
      
    </>
  )
}

export default App
