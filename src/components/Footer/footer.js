import React from 'react'
import './style.css'
import Logo from '../../images/logo.png'
import Facebook from '../Icons/facebook'
import Instagram from '../Icons/instagram'
import Twitter from '../Icons/twitter'
import Location from '../Icons/location'
import Call from '../Icons/call'
import Email from '../Icons/email'
import Footerbox from 'components/Footerbox'

const footerdata = [
  {
    id: 1,
    title: 'Social Media',
    image: <Facebook />,
    image1: <Instagram />,
    image2: <Twitter />,
    flex: 'inline',
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
    link2: 'yatranepal777@ gmail.com',
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
            <div className="col-lg-3 d-flex align-items-center col-md-6 mt-3">
              <img src={Logo} className="img-fluid yatra-logo" alt="logo" />
            </div>
            {footerdata.map((footeritem) => (
              <Footerbox
                title={footeritem.title}
                link1={footeritem.link1}
                link2={footeritem.link2}
                link3={footeritem.link3}
                image={footeritem.image}
                image1={footeritem.image1}
                image2={footeritem.image2}
                display={footeritem.flex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
