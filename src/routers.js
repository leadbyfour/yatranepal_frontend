import Service from 'pages/service';
import React from 'react';
import { Routes, Route } from "react-router-dom";


 const Routers = () => {
  return (
    <>
     <Routes>
<Route path="/service" element={<Service/>}/>
</Routes>
    </>
  )
}
export default Routers;