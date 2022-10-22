import React from "react";
import logo from "../Assests/logo.svg";
import call from "../Icons/phn-call.svg";
import email from "../Icons/email.svg";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>
            <div className="phn-no ms-5 text-white">
              <img src={call} className="img-fluid me-2" alt="phn-img" />
              977-985106598
            </div>
            <div className="Email ms-4 text-white">
              <img src={email} className="img-fluid me-2" alt="email-img" />
              yatranepal@gmail.com
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white me-2"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-2"
                    aria-current="page"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-2"
                    aria-current="page"
                    href="#"
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-2"
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
