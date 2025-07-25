import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './Pages/Home'
import  About from './Pages/About'
import  Enroll from './Pages/Enroll'
import  Events from './Pages/Events'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Contact from './Pages/Contact';
import ComingSoon from './Pages/ComingSoon';
import AiAssitant from './components/AiAssitant';

function App() {
  

  return (
    <>

    <Navbar/>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
     
       
      </Routes>
      <AiAssitant/>
    <Footer/>
      
    </>
  )
}

export default App
