import Contact from 'pages/contact';
import React from 'react';
import { Routes, Route } from "react-router-dom";


 const Routers = () => {
  return (
    <>
     <Routes>
<Route path="/contact" element={<Contact/>}/>
</Routes>
    </>
  )
}
export default Routers;