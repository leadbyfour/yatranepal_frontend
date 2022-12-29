import Circletick from 'components/Icons/circletick'
import Minus from 'components/Icons/minus'
import React from 'react'
import yatra from '../../images/yatra.png'
import './style.css'

const index = () => {
  return (
    <>
      <div className="moodal p-3">
        <div className="d-flex justify-content-between align-items-center">
          <img src={yatra} className="img-fluid" />
          <Circletick />
          <Minus />
        </div>
        <p className="thank">Thank You.</p>
        <p className="mt-5 pop-msg">
          We received your message. Will get back to you soon.
        </p>
      </div>
    </>
  )
}

export default index
