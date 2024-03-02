import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Slideshow from './Slideshow.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Projects from './pages/Projects.jsx'
import Media from './pages/Media.jsx'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInvolved from './pages/GetInvolved.jsx'
import Downloads from './pages/Downloads.jsx'
import Centers from './pages/Centers.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/media' element={<Media/>}></Route>
      <Route path='/getinvolved' element={<GetInvolved/>}></Route>
      <Route path='/downloads' element={<Downloads/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/centers' element={<Centers/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
