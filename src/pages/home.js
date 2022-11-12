import Navbar from "../components/Navbar/navbar";
import Banner from "../images/banner.png"
import Ticks from "../components/Icons/tick";
import Machine from "../images/machine.png";
import Chain from '../images/chain.png';
import Garage from "../images/garage.png";
import Footer from "../components/Footer/footer";
import Vector1 from "components/Icons/Vector1";
import Vector2 from "components/Icons/Vector2";
import Vector3 from "components/Icons/Vector3";
import "../index.css"
import "../styles/home.css";


const Whyusdata=[
  {
  id:1,
  image:<Vector3/>,
  title:"lorem ipsum",
  discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
{
  id:2,
  image:<Vector1/>,
  title:"lorem ipsum",
  discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.",
  bg:"red"
},
{
  id:3,
  image:<Vector2/>,
  title:"lorem ipsum",
  discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
]

const WhyUsSection = () => {
  return (
    <div className="banner-3 mt-5">
    <div className="container">
     <h2 className="text-center">Why Us?</h2>
        <div className="row mt-5">
          {Whyusdata.map((props)=>(
        <div className="col-lg-4">
          <div className="box-1 text-white">
            <div className="box1-img text-center">
 {props.image}
 </div>
 <div className="box-text p-5">
 <h3 className="text-center">{props.title}</h3>
 <p className='mt-4'>{props.discription}</p>
 </div>
 </div>
 </div>
            ))}
           
          </div>
          <div className="text-center mt-5">
            <img src={Chain} className="img-fluid" alt='chain'/>
          </div>
        </div>
      </div>
  )
}


const QualifiedSection=()=> {
  return (
    <>
<div className="banner-2 padtb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={Machine} className="img-fluid" alt="banner2" />
            </div>
            <div className="col-lg-6">
              <div className="text-center  mt-5">
                <h2>We are qualified & of experience in this field</h2>
                <ul>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                  <li className="mt-5">
                    <Ticks/>
                  It is a long established fact that a reader will be
                    distracted.
                  </li>
                </ul>
              </div>
              <img src={Chain} className="img-fluid mt-3" alt="chain" />
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

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
                <img src={Garage} className="img-fluid" alt='garage'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-1">
        <img src={Banner} alt="bannerphoto" className="img-fluid" />
      </div>
      <QualifiedSection />
      <WhyUsSection />
      <Aboutyatra />
      <Footer />
    </>
  );
};

export default Home;
