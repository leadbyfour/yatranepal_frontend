import { useState } from 'react'
import qnmark from '../images/qnmark.png'
import plus from '../images/plus.png'
import Maps from 'components/maps'
import ChainBreak from 'components/Icons/chainBreak'
import '../styles/contact.css'
import PopUpMessage from 'components/popUpMessage'
import BasicExample from 'components/Accodian'
import Call from 'components/Icons/call'
import Email from 'components/Icons/email'
import Location from 'components/Icons/location'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Contact = () => {
  const [number, setNumber] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const nepaliPhoneNumberRegex =
      /^(98[4-6]|97[45]|980|981|982|961|962|988|972|963)\d{7}$/
    const result = nepaliPhoneNumberRegex.test(number)
    if (!result) {
      setMessage('Invalid phone number. Please enter valid phone number')
      setShowError(true)
      return
    }

    if (!navigator.onLine) {
      setMessage(
        'You are currently offline. Please check your internet connection and try again.',
      )
      setShowError(true)
      return
    }

    const form = event.target
    const data = new FormData(form)
    try {
      await axios({
        method: form.method,
        url: form.action,
        data: data,
        headers: {
          Accept: 'application/json',
        },
      })
      form.reset()
      setMessage('We received your message. Will get back to you soon.')
      setShowSuccess(true)
      setNumber('')
    } catch (error) {
      setMessage(error.message + '. Please Try Again.')
      setShowError(true)
    }
  }
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const params = new URLSearchParams(location.search)
    const scrollTo = params.get('scrollTo')
    if (document.getElementById(scrollTo)) {
      const offsetsTop = document
        .getElementById(scrollTo)
        .getBoundingClientRect().top
      window.scroll({
        top: offsetsTop,
      })
    }
  }, [location])
  return (
    <div className="contact-us-page">
      <div className="contact-us-section">
        <div className="container">
          <h2 className="red contact-us mb-5">Contact Us</h2>
        </div>
        <div className="text-white contact-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 contact-data col-12">
                <div className="text-white">
                  <h5 className="red contact-info">
                    <Call />
                    <span className="ms-3">Call Us</span>
                  </h5>
                  <p className="phone-numbers">
                    9851160294,9849167028,9749835510
                  </p>
                  <h5 className="mt-5 red contact-info">
                    <Email />
                    <span className="ms-3">E-Mail</span>
                  </h5>
                  <p
                    className="pointer"
                    onClick={() =>
                      (window.location = 'mailto:yatranepal777@gmail.com')
                    }
                  >
                    yatranepal777@gmail.com
                  </p>
                  <h5 className="mt-5 red contact-info">
                    <Location />
                    <span className="ms-3">Location</span>
                  </h5>
                  <p className="address">
                    <a
                      href="https://maps.google.com/maps?q=Yatra+Nepal+Service+Center+Pvt+Ltd"
                      target="_blank"
                    >
                      Bansbari,Kathmandu
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 touch col-12 mt-sm">
                <div className="form-card p-5">
                  <h4 className="red my-3">Get in Touch</h4>
                  <p className="my-4">
                    Have some inquiry or wanna give us a feedback? Feel free to
                    leave us a message.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/mjvdbkqr"
                    method="POST"
                  >
                    <div className="row gy-5">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="first-name"
                          className="form-control form-bg"
                          id="exampleFormControlInput1"
                          placeholder="First Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="last-name"
                          className="form-control form-bg"
                          id="exampleFormControlInput1"
                          placeholder="Last Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          type="number"
                          name="contact-number"
                          className="form-control form-bg"
                          id="exampleFormControlInput1"
                          placeholder="Contact Number"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="address"
                          className="form-control form-bg"
                          id="exampleFormControlInput1"
                          placeholder="Address"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control form-bg text-area"
                          name="description"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Leave Us A Message....."
                          autoComplete="off"
                        ></textarea>
                      </div>
                      <div className="send-btn mt-5">
                        <button
                          type="submit"
                          className="text-center send-message"
                        >
                          Send Message
                        </button>
                        {showSuccess && (
                          <PopUpMessage
                            status="success"
                            closePopUp={setShowSuccess}
                            message={message}
                          />
                        )}
                        {showError && (
                          <PopUpMessage
                            status="error"
                            closePopUp={setShowError}
                            message={message}
                          />
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row small-wd">
        <div className="mt-chain chain-sm col-lg-6">
          <ChainBreak />
        </div>
      </div>

      <div className="banner-contact" id="location">
        <div className="container">
          <h1 className="location">Precise Location</h1>
          <div className="row">
            <div className="col-lg-12">
              <Maps />
            </div>
          </div>
        </div>
        <div className="text-center map-chain" id="faq">
          <ChainBreak />
        </div>
      </div>

      <div className="banner-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <img src={qnmark} className="img-fluid" />
              <h1 className="faq">FAQ</h1>
              <h4 className="text-white mt-3 frequently">
                Frequently Asked Questions
              </h4>
            </div>
            <div className="col-lg-6">
              <BasicExample />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
