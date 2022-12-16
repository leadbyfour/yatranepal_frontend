import React from 'react'
import './style.css'
import Logo from '../../images/logo.png'
import Facebook from '../Icons/facebook'
import Instagram from '../Icons/instagram'
import Twitter from '../Icons/twitter'
import Location from '../Icons/location'
import Call from '../Icons/call'
import Email from '../Icons/email'

const footerdata = [
  {
    id: 1,
    title: 'Social Media',
    image: <Facebook />,
    image1: <Instagram />,
    image2: <Twitter />,
    link1: 'Yatra Nepal',
    link2: 'Yatra Nepal',
    link3: 'Yatra Nepal',
  },
  {
    id: 2,
    title: 'Quick Links',
    link1: 'FAQ',
    link2: 'Services',
    link3: 'Precise location',
  },
  {
    id: 3,
    title: 'Contact',
    image: <Call />,
    image1: <Email />,
    image2: <Location />,
    link1: '9851160294,01-49174458',
    link2: 'yatranepal777@gmail.com',
    link3: 'Bansbari, Kathmandu',
  },
]

function Footer() {
  return (
    <>
      <div className="footer mt-5 padtb">
        <div className="footer-line"></div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-3 d-flex align-items-center">
              <img src={Logo} className="w-75" alt="logo" />
            </div>
            {footerdata.map((props) => (
              <div className="col-lg-3">
                <h3>{props.title}</h3>
                <div className="d-flex align-items-center link">
                  <div className="img-link">{props.image}</div>
                  <div className="ms-3">{props.link1}</div>
                </div>
                <div className="d-flex align-items-center link">
                  <div className="img-link">{props.image1}</div>
                  <div className="ms-3">{props.link2}</div>
                </div>
                <div className="d-flex align-items-center link">
                  {props.image2}
                  <div className="ms-3">{props.link3}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
