import { useState } from 'react'
import qnmark from '../images/qnmark.png'
import plus from '../images/plus.png'
import Maps from 'components/maps'
import ChainBreak from 'components/Icons/chainBreak'
import '../styles/contact.css'
import PopUpMessage from 'components/popUpMessage'

const Contact = () => {
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const nepaliPhoneNumberRegex =
      /^(98[4-6]|97[45]|980|981|982|961|962|988|972|963)\d{7}$/
    const result = nepaliPhoneNumberRegex.test(number)
    if (!result) {
      setShowError(true)
      return
    }

    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
    setNumber('')
    setShowSuccess(true)
  }
  return (
    <>
      <div className="contact-us-section">
        <div className="container">
          <h2 className="red contact-us mb-5">Contact Us</h2>
        </div>
        <div className="text-white contact-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 contact-data">
                <div className="text-white">
                  <h5 className="red contact-info">Call Us</h5>
                  <p> 9851160294,9849167028,9749835510</p>
                  <h5 className="mt-5 red contact-info">E-Mail</h5>
                  <p>yatranepal777@gmail.com</p>
                  <h5 className="mt-5 red contact-info">Location</h5>
                  <p>Bansbari,Kathmandu</p>
                </div>
              </div>
              <div className="col-lg-6 touch">
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
                      <textarea
                        className="form-control mt-5 form-bg text-area"
                        name="description"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Leave Us A Message....."
                        autoComplete="off"
                      ></textarea>
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
                          />
                        )}
                        {showError && (
                          <PopUpMessage
                            status="error"
                            closePopUp={setShowError}
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

        <div className="container mt-chain">
          <ChainBreak />
        </div>
      </div>

      <div className="banner-contact">
        <div className="container">
          <h1 className="mb-5 location">Precise Location</h1>
          <div className="row">
            <div className="col-lg-12">
              <Maps />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <ChainBreak />
      </div>

      <div className="banner-faq padtb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <img src={qnmark} className="img-fluid" />
              <h4 className="text-white mt-2 frequently">
                Frequently Asked Questions
              </h4>
              <h1 className="faq">FAQ</h1>
            </div>
            <div className="col-lg-6">
              <h5 className="red">What is Yatra Nepal Service center?</h5>
              <p className="mt-3 faq-description">
                Yatra Nepal Service Centre is the multi-brand two-wheeler
                servicing center in Nepal.
              </p>
              <div className="faq-point">
                <p className="mt-4">
                  Where is Yatra Nepal Located?
                  <img src={plus} className="img-fluid ms-2" alt="plus" />
                </p>
                <p className="mt-faq">
                  What are services avilable?
                  <img src={plus} className="img-fluid ms-2" alt="plus" />
                </p>
                <p className="mt-faq">
                  Is Door step service avilable?
                  <img src={plus} className="img-fluid ms-2" alt="plus" />
                </p>
                <p className="mt-faq">
                  Is insurance service avilable?
                  <img src={plus} className="img-fluid ms-2" alt="plus" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
