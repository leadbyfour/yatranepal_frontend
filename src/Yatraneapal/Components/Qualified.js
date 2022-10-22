import React from 'react';
import Tick from "../Icons/ticks.svg";
import bannerimg from "../Assests/banner-img.svg";
import Chain from "../Assests/Chain.svg";

const Qualified=()=> {
  return (
    <>
<div className="banner-2 padtb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={bannerimg} className="img-fluid" alt="banner2" />
            </div>
            <div className="col-lg-6">
              <div className="text-center  mt-5">
                <h2>We are qualified & of experience in this field</h2>
                <ul>
                  <li className="mt-5">
                  <img src={Tick} className="img-fluid me-3" alt="tick"/>It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                  <img src={Tick} className="img-fluid me-3" alt="tick"/>It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                  <img src={Tick} className="img-fluid me-3" alt="tick"/>It is a long established fact that a reader will be
                    distracted.
                  </li>
                </ul>
              </div>
              <img src={Chain} className="img-fluid mt-3" alt="chain" />
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Qualified;