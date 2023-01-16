import { NavLink } from 'react-router-dom'
import Routers from 'routers'
import Logo from '../../images/logo.png'
import Call from '../Icons/call'
import Email from '../Icons/email'
import './style.css'
function Navbar() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <div className="phn-no ms-5 text-white">
              <Call />

              <span className="ms-2 nav-details">977-985106598</span>
            </div>
            <div className="Email ms-4 text-white">
              <Email />
              <span
                onClick={() =>
                  (window.location = 'mailto:yatranepal777@gmail.com')
                }
                className="ms-2 nav-details"
              >
                yatranepal777@gmail.com
              </span>
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
                  <NavLink
                    className="nav-link text-white me-2 home"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white me-2"
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white me-2"
                    aria-current="page"
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white me-2"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routers />
    </>
  )
}

export default Navbar
