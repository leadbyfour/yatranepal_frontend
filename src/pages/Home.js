import React from "react";
import "../styles/home.css";
import "../index.css"
import Navbar from "../Components/navbar/Navbar";
import banner from "../Components/asset/banner.png"
import Ticks from "../Components/icons/Ticks";
import machine from "../Components/asset/machine.png";
import chain from "../Components/asset/chain.png";
import Whyus from "../Components/Whyus";
import garage from "../Components/asset/garage.png";
import Footer from "../Components/footer/Footer";

const Qualified=()=> {
  return (
    <>
<div className="banner-2 padtb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={machine} className="img-fluid" alt="banner2" />
            </div>
            <div className="col-lg-6">
              <div className="text-center  mt-5">
                <h2>We are qualified & of experience in this field</h2>
                <ul>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                </ul>
              </div>
              <img src={chain} className="img-fluid mt-3" alt="chain" />
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}


const Aboutyatra = () => {
  return (
    <>
    <div className="banner-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>
                About <span className='yatraNepal'>Yatra Nepal</span>
              </h2>
              <p className="mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <img src={chain} className="img-fluid mt-4" alt='chain'/>
            </div>
            <div className="col-lg-6">
                <img src={garage} className="img-fluid" alt='garage'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-1">
        <img src={banner} alt="bannerphoto" className="img-fluid" />
      </div>
      <Qualified />
      <Whyus />
      <Aboutyatra />
      <Footer />
    </>
  );
};

export default Home;
