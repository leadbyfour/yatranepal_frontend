import React from 'react';
import Chain from "../Assests/Chain.svg";
import garage from "../Assests/garage.svg";

 const Aboutyatra = () => {
  return (
    <>
    <div className="banner-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>
                About <span className='yatraNepal'>Yatra Nepal</span>
              </h2>
              <p className="mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <img src={Chain} className="img-fluid mt-4" alt='chain'/>
            </div>
            <div className="col-lg-6">
                <img src={garage} className="img-fluid" alt='garage'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Aboutyatra;