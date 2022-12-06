import Contact from './pages/contact'
import Home from './pages/home'
import Service from './pages/service'
import About from './pages/about'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
export default Routers
