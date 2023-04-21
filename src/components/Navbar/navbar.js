import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Routers from 'routers'
import Logo from '../../images/logo.png'
import Call from '../Icons/call'
import Email from '../Icons/email'
import './style.css'

function Navbar() {
  const navbarRef = useRef(null)

  useEffect(() => {
    function handleNavItemClick() {
      if (navbarRef.current.classList.contains('show')) {
        navbarRef.current.classList.remove('show')
      }
    }

    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavItemClick)
    })
  }, [])

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <div className="d-flex align-items-center">
              <div className="phn-no ms-2 text-white d-flex align-items-center">
                <Call />

                <span className="ms-2 nav-details">+977 985-1160294</span>
              </div>
              <div className="email ms-2 text-white d-flex align-items-center mb-1">
                <Email />
                <span
                  onClick={() =>
                    (window.location = 'mailto:yatranepal777@gmail.com')
                  }
                  className="ms-2 nav-details pointer"
                >
                  yatranepal777@gmail.com
                </span>
              </div>
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
              <span className="fa fa-bars text-white" aria-hidden="true"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              ref={navbarRef}
            >
              <ul className="navbar-nav ms-auto mb-1 d-flex align-items-center">
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
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
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
