import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Service from 'pages/service';
import Logo from '../../images/logo.png';
import Call from "../Icons/call";
import Email from "../Icons/email";
import "./style.css"

function Navbar() {
  return (
    <>
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="phn-no ms-5 text-white">
            <Call />

            <span className="ms-2">977-985106598</span>
          </div>
          <div className="Email ms-4 text-white">
            <Email />
            <span className="ms-2">yatranepal@gmail.com</span>
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
                <Link
                  className="nav-link active text-white me-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white me-2"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white me-2"
                  aria-current="page"
                  to="/service"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white me-2"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/service" element={<Service />} />
</Routes>

</>

  );
}

export default Navbar;
