import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Website from 'website';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Website/>
    </BrowserRouter>
);
