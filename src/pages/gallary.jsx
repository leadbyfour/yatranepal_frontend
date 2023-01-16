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
      <div className="container mt-top">
        <div className="grid-container mt-5">
          <div className="item">
            <h1 className="photo-gallery">
              A Photo<br/> Gallery of <br />
              <span className="red">Yatra Nepal</span>
            </h1>
            <p className="gallery-desc">
              Check out some gimps of our<br/> service at
              <span className="red"> Yatra Nepal</span>.
            </p>
          </div>
          <div className="item-1">
            <img src={photo1} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-2">
            <img src={photo2} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-3">
            <img src={photo3} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-4">
            <img src={photo4} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-5">
            <img src={photo5} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-6">
            <img src={photo6} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-7">
            <img src={photo7} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-8">
            <img src={photo8} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-9">
            <img src={photo9} className="img-fluid" alt="gallary-img" />
          </div>
          <div className="item-10">
            <img src={photo10} className="img-fluid" alt="gallary-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
