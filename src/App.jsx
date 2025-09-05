import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutSection from './pages/About'
import NotFoundPage from './components/NotFound'
import ServicesSection from './pages/Service'

function App() {

  return (
    <BrowserRouter basename='/Doctor'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutSection/>}/>
      <Route path='/services' element={<ServicesSection/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
