import React from "react";
import "./style.css";
import Logo from "../../images/logo.png";
import Facebook from "../Icons/facebook";
import Instagram from "../Icons/instagram";
import Twitter from "../Icons/twitter";
import Location from "../Icons/location";
import Call from "../Icons/call";
import Email from "../Icons/email";

const footerdata=[{
id:1,
title:"Social Media",
image:<Facebook/>,
image1:<Instagram/>,
image2:<Twitter/>,
link1:"Yatra Nepal",
link2:"Yatra Nepal",
link3:"Yatra Nepal"
},
{
  id:2,
  title:"Quick Links",
  link1:"FAQ",
  link2:"Services",
  link3:"Precise location"
  },
  {
    id:3,
    title:"Contact",
    image:<Call/>,
    image1:<Email/>,
    image2:<Location/>,
    link1:"9851160294, 9849167028 ,9749835510",
    link2:"yatranepal777@gmail.com",
    link3:"Bansbari, Kathmandu",

    },
]

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 padtb">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-3 d-flex align-items-center">
              <img src={Logo} className="w-75" alt="logo" />
            </div>
            {footerdata.map((props)=>(
            <div className="col-lg-3">
            <h3>{props.title}</h3>
            <span className="d-block">
              {props.image}
              <span className="ms-2">{props.link1}</span>
            </span>
            <span className="d-block">
              {props.image1}
              <span className="ms-2">{props.link2}</span>
            </span>
            <span className="d-block">
              {props.image2}
              <span className="ms-2">{props.link3}</span>
            </span>
          </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
