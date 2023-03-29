import qnmark from '../images/qnmark.png'
import plus from '../images/plus.png'
import Maps from 'components/maps'
import ChainBreak from 'components/Icons/chainBreak'
import '../styles/contact.css'
import BasicExample from 'components/Accodian'
import Call from 'components/Icons/call'
import Email from 'components/Icons/email'
import Location from 'components/Icons/location'

const Contact = () => {
  return (
    <>
      <div className="contact-us-section">
        <div className="container">
          <h2 className="red contact-us mb-5">Contact Us</h2>
        </div>
        <div className="text-white contact-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 contact-data col-12">
                {/* <div className="text-white contact-banner"> */}
                <div className="text-white">
                  <h5 className="red contact-info">
                    <Call />
                    <span className="ms-3">Call Us</span>
                  </h5>
                  <p>9851160294,9849167028,9749835510</p>
                  <h5 className="mt-5 red contact-info">
                    <Email />
                    <span className="ms-3">E-Mail</span>
                  </h5>
                  <p>yatranepal777@gmail.com</p>
                  <h5 className="mt-5 red contact-info">
                    <Location />
                    <span className="ms-3">Location</span>
                  </h5>
                  <p className="address">Bansbari,Kathmandu</p>
                </div>
              </div>
              <div className="col-lg-6 touch col-12 mt-sm">
                <div className="form-card p-5">
                  <h4 className="red my-3">Get in Touch</h4>
                  <p className="my-4">
                    Have some inquiry or wanna give us a feedback? Feel free to
                    leave us a message.
                  </p>
                  <div className="row gy-5">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control form-bg"
                        id="exampleFormControlInput1"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control form-bg"
                        id="exampleFormControlInput1"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control form-bg"
                        id="exampleFormControlInput1"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control form-bg"
                        id="exampleFormControlInput1"
                        placeholder="Address"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control mt-5 form-bg text-area"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Leave Us A Message....."
                      ></textarea>
                    </div>
                    <div className="send-btn mt-5">
                      <p className="text-center send-message">Send Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="mt-chain chain-sm col-lg-6">
          <ChainBreak />
        </div>
      </div>

      <div className="banner-contact" id="precise">
        <div className="container">
          <h1 className="location">Precise Location</h1>
          <div className="row">
            <div className="col-lg-12">
              <Maps />
            </div>
          </div>
        </div>
        <div className="text-center map-chain">
          <ChainBreak />
        </div>
      </div>

      <div className="banner-faq" id="faq">
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
    </>
  )
}

export default Contact
