import React from "react";
import "../Css/home.css";
import Navbar from "../Components/Navbar";
import header from "../Assests/Header.svg";
import Qualified from "../Components/Qualified";
import Whyus from "../Components/Whyus";
import Aboutyatra from "../Components/Aboutyatra";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-1">
        <img src={header} alt="bannerphoto" className="img-fluid" />
      </div>
      <Qualified />
      <Whyus />
      <Aboutyatra />
      <Footer />
    </>
  );
};

export default Home;
