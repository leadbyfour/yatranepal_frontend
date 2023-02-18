import React from 'react'
import gallery from 'images/gallery.png'
import photo1 from 'images/photo-one.png'
import photo2 from 'images/photo-two.png'
import photo3 from 'images/photo-three.png'
import photo4 from 'images/photo-four.png'
import photo5 from 'images/photo-five.png'
import photo6 from 'images/photo-six.png'
import photo7 from 'images/photo-seven.png'
import photo8 from 'images/photo-eight.png'
import photo9 from 'images/photo-nine.png'
import photo10 from 'images/photo-ten.png'
import '../styles/gallery.css'

const Gallery = () => {
  return (
    <>
      <div className="banner-1">
        <img src={gallery} className="img-fluid" alt="aboutimage" />
      </div>
      <div className="container">
        <div className="grid-container mt-5">
          <div className='row justify-content-between d-flex'>
            <div className='col-lg-6 col-md-6'>
            <div className="item text-center text-md-start text-lg-start">
            <h1 className="photo-gallery text-white">
              A Photo<br/> Gallery of <br />
              <span className="red">Yatra Nepal</span>
            </h1>
            <p className="gallery-desc text-white">
              Check out some gimps of our<br/> service at
              <span className="red"> Yatra Nepal</span>.
            </p>
          </div>
            </div>
            <div className='col-lg-3 col-md-3 align-self-end col-12'>
            <div className="item-1 text-center mt-3">
            <img src={photo1} className="img-fluid mb-3" alt="gallary-img" />
          </div>
            </div>
          </div>

          <div className='row d-flex justify-content-end'>
          <div className='col-lg-3 align-self-end col-md-3 col-12'>
            <div className="item-5 text-center">
            <img src={photo5} className="img-fluid" alt="gallary-img" />
          </div>
            </div>
            <div className='col-lg-3 col-md-3 col-12'>
            <div className="item-4 text-center my-3 my-lg-0 my-md-0">
            <img src={photo4} className="img-fluid" alt="gallary-img" />
          </div>
            </div>
            <div className='col-lg-3 col-md-3 col-12'>
            <div className="item-2 text-center">
            <img src={photo2} className="img-fluid" alt="gallary-img" />
            <img src={photo3} className="img-fluid mt-4" alt="gallary-img" />
          </div>
            </div>
            
          </div>
          <div className='row d-flex justify-content-end'>
          <div className='col-lg-3 align-self-end col-md-3 col-12'>
            <div className="item-8 text-center mt-3">
            <img src={photo8} className="img-fluid" alt="gallary-img" />
          </div>
            </div>
            <div className='col-lg-3 col-md-3 col-12'>
            <div className="item-7 text-center">
            <img src={photo7} className="img-fluid mt-3" alt="gallary-img" />
          </div>
            </div>
            <div className='col-lg-6 gy-3 col-md-6 col-12'>
            <div className="item-6 text-center">
            <img src={photo6} className="img-fluid" alt="gallary-img" />
          </div>
            </div>
            
          </div>
          <div className='row d-flex justify-content-end'>
            <div className='col-lg-6 col-md-6 col-12'>
            <div className="item-10 text-center">
            <img src={photo10} className="img-fluid mt-3" alt="gallary-img" />
          </div>
            </div>
            <div className='col-lg-6 gy-3 col-md-6 col-12'>
            <div className="item-9 text-center">
            <img src={photo9} className="img-fluid" alt="gallary-img" />
          </div>
            </div>
            </div>
            </div>
          </div>

    </>
  )
}

export default Gallery
