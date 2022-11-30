import Home from 'pages/home';
import React from 'react';
import { Routes, Route } from "react-router-dom";


 const Routers = () => {
  return (
    <>
     <Routes>
<Route path="/" element={<Home/>}/>
</Routes>
    </>
  )
}
export default Routers;