import Navbar from 'components/Navbar/navbar';
import Footer from 'components/Footer/footer';
import chain from "../images/chain.png"
import qnmark from "../images/qnmark.png"
import plus from "../images/plus.png"
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
    <Navbar/>
<div className='container padtb'>
    <h2 className='red mt-3'>Contact Us</h2>
    </div>
    <div className='contact-banner text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 p-4'>
                    <h5 className='red'>Call Us</h5>
                    <p> 9851160294,9849167028,9749835510</p>
                    <h5 className='mt-5 red'>E-Mail</h5>
                    <p>yatranepal777@gmail.com</p>
                    <h5 className='mt-5 red'>Location</h5>
                    <p>Bansbari,Kathmandu</p>
                </div>
                <div className='col-lg-5 Touch'>
                    <div className='form-card p-5'>
                    <h4 className='red'>Get in Touch</h4>
                    <p>Have some inquiry or wanna give us a feedback? Feel free to leave us a message.</p>
                    <div className='row gy-5'>
                        <div className='col-lg-6'>
                        <input type="text" className="form-control form-bg" id="exampleFormControlInput1" placeholder="First Name"/>
                        </div>
                        <div className='col-lg-6'>
                        <input type="text" className="form-control form-bg" id="exampleFormControlInput1" placeholder="Last Name"/>
                        </div>
                        <div className='col-lg-6'>
                        <input type="text" className="form-control form-bg" id="exampleFormControlInput1" placeholder="Contact Number"/>
                        </div>
                        <div className='col-lg-6'>
                        <input type="text" className="form-control form-bg" id="exampleFormControlInput1" placeholder="Address"/>
                        </div>
                    </div>
                    <textarea className="form-control mt-5 form-bg text-area" id="exampleFormControlTextarea1" rows="3" placeholder='Leave Us A Message.....'></textarea>
              		</div>
              </div>
          </div>
       </div>
   </div>
				<div className='container mt-5'>
				    <img src={chain} classname="img-fluid" alt="chain"/>
							</div>

							<div className='banner-3 padtb'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 text-center'>
<img src={qnmark} className="img-fluid"/>
<h4 className='text-white mt-2 frequently'>Frequently Asked Questions</h4>
<h1 className='faq'>FAQ</h1>
                    </div>
                    <div className='col-lg-6'>
                        <h5 className='red'>What is Lorem Ipsum?</h5>
                        <p className='mt-3 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                    <ul className='red'>
                        <li>What is Lorem Ipsum Lorem?<img src={plus} className="img-fluid ms-2" alt="plus"/></li>
                        <li>What is Lorem Ipsum Lorem?<img src={plus} className="img-fluid ms-2" alt="plus"/></li>
                        <li>What is Lorem Ipsum Lorem?<img src={plus} className="img-fluid ms-2" alt="plus"/></li>
                        <li>What is Lorem Ipsum Lorem?<img src={plus} className="img-fluid ms-2" alt="plus"/></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

				<Footer/>
    </>
  )
}

export default Contact;