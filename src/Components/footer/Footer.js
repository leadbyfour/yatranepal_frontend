import React from "react";
import "./style.css";
import logo from "../asset/logo.png";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import Location from "../icons/Location";
import Call from "../icons/Call";
import Email from "../icons/Email";

const footerdata=[{
id:1,
title:"Social Media",
image:<Facebook/>,
image1:<Instagram/>,
image2:<Twitter/>,
one:"Yatra Nepal",
two:"Yatra Nepal",
three:"Yatra Nepal"
},
{
  id:2,
  title:"Quick Links",
  one:"FAQ",
  two:"Services",
  three:"Precise location"
  },
  {
    id:3,
    title:"Contact",
    image:<Call/>,
    image1:<Email/>,
    image2:<Location/>,
    one:"9851160294, 9849167028 ,9749835510",
    two:"yatranepal777@gmail.com",
    three:"Bansbari, Kathmandu",

    },
]

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 padtb">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-3 d-flex align-items-center">
              <img src={logo} className="w-75" alt="logo" />
            </div>
            {footerdata.map((props)=>(
            <div className="col-lg-3">
            <h3>{props.title}</h3>
            <span className="d-block">
              {props.image}
              <span className="ms-2">{props.one}</span>
            </span>
            <span className="d-block">
              {props.image1}
              <span className="ms-2">{props.two}</span>
            </span>
            <span className="d-block">
              {props.image2}
              <span className="ms-2">{props.three}</span>
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
