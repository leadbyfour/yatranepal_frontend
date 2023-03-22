import Circletick from 'components/Icons/circletick'
import Minus from 'components/Icons/minus'
import { useState } from 'react'
import yatra from '../../images/yatra.png'
import './style.css'

const index = (props) => {
  return (
    <>
      <div className="moodal p-3">
        <div className="popup-inner">
          <div className="d-flex justify-content-between align-items-center">
            <img src={yatra} className="img-fluid" />
            <Circletick />
            <button
              className="button-minus"
              onClick={() => props.setSubmitted(false)}
            >
              <Minus />
            </button>
          </div>
          <p className="thank">Thank You.</p>
          <p className="mt-5 pop-msg">
            We received your message. Will get back to you soon.
          </p>
        </div>
      </div>
    </>
  )
}

export default index
