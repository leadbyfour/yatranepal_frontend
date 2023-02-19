import Contact from './pages/contact'
import Home from './pages/home'
import Service from './pages/service'
import About from './pages/about'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Gallery from 'pages/gallary'
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}
export default Routers
