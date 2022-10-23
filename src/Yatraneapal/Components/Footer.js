import React from "react";
import logo from "../Assests/logo.svg";
import facebook from "../Icons/facebook.svg";
import instagram from "../Icons/instagram.svg";
import twitter from "../Icons/twitter.svg";
import location from "../Icons/location.svg";
import call from "../Icons/phn-call.svg";
import email from "../Icons/email.svg";

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 padtb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 d-flex align-items-center">
              <img src={logo} className="w-75" alt="logo" />
            </div>
            <div className="col-lg-3">
              <h3>Social Media</h3>
              <span className="d-block">
                <img src={facebook} alt="facebbok" className="me-3" />
                Yatra Nepal
              </span>
              <span className="d-block">
                <img src={instagram} alt="instagram" className="me-3" />
                Yatra Nepal
              </span>
              <span className="d-block">
                <img src={twitter} alt="twitter" className="me-3" />
                Yatra Nepal
              </span>
            </div>
            <div className="col-lg-3">
              <h3>Quicks Links</h3>
              <span className="d-block">FAQ</span>
              <span className="d-block">Services</span>
              <span className="d-block">Precise Location</span>
            </div>
            <div className="col-lg-3">
              <h3>Contact</h3>
              <span className="d-block">
                <img src={call} alt="facebbok" className="me-1 img-fluid" />
                9851160294,9849167028,<p className="d-block">9749835510</p>
              </span>
              <span className="d-block">
                <img src={email} alt="email" className="me-3 img-fluid" />
                yatranepal777@gmail.com
              </span>
              <span className="d-block">
                <img src={location} alt="location" className="me-3 img-fluid" />
                Bansbari, Kathmandu
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
