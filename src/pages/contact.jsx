import qnmark from '../images/qnmark.png'
import plus from '../images/plus.png'
import Maps from 'components/maps'
import ChainBreak from 'components/Icons/chainBreak'
import '../styles/contact.css'

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
                    <textarea
                      className="form-control mt-5 form-bg text-area"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Leave Us A Message....."
                    ></textarea>
                    <div className="send-btn mt-5">
                      <p className="text-center send-message">Send Message</p>
                    </div>
                  </div>
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
