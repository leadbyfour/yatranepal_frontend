import Navbar from '../components/Navbar/navbar'
import Banner from '../images/banner.png'
import Ticks from '../components/Icons/tick'
import Machine from '../images/machine.png'
import Garage from '../images/garage.png'
import Footer from '../components/Footer/footer'
import '../styles/home.css'
import Battery from 'components/Icons/battery'
import Mechanic from 'components/Icons/mechanic'
import Setting from 'components/Icons/setting'
import Infobox from 'components/InfoBox'
import ChainBreak from 'components/Icons/chainBreak'

const Whyusdata = [
  {
    id: 1,
    image: <Battery />,
    title: 'lorem ipsum',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'red',
  },
  {
    id: 2,
    image: <Mechanic />,
    title: 'lorem ipsum',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'grey',
  },
  {
    id: 3,
    image: <Setting />,
    title: 'lorem ipsum',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'red',
  },
]

const WhyUsSection = () => {
  return (
    <div className="banner-3 mt-5">
      <div className="container">
        <h2 className="text-center">Why Us?</h2>
        <div className="row mt-5">
          {Whyusdata.map((whyusItem) => (
            <Infobox
              title={whyusItem.title}
              description={whyusItem.description}
              image={whyusItem.image}
              color={whyusItem.bg}
            />
          ))}
        </div>
        <div className="text-center mt-5">
          <ChainBreak />
        </div>
      </div>
    </div>
  )
}

const QualifiedSection = () => {
  return (
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
                  <Ticks />
                  <span className="ms-3">
                    It is a long established fact that a reader will be
                    distracted.
                  </span>
                </li>
                <li className="mt-5">
                  <Ticks />
                  <span className="ms-3">
                    It is a long established fact that a reader will be
                    distracted.
                  </span>
                </li>
                <li className="mt-5">
                  <Ticks />
                  <span className="ms-3">
                    It is a long established fact that a reader will be
                    distracted.
                  </span>
                </li>
              </ul>
            </div>
            <div className="chain-break mt-5">
              <ChainBreak />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Aboutyatra() {
  return (
    <div className="banner-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>
              About
              <span className="yatraNepal">Yatra Nepal</span>
            </h2>
            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content, making it look like readable English.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <div className="chain-break mt-5">
              <ChainBreak />
            </div>
          </div>
          <div className="col-lg-6">
            <img src={Garage} className="img-fluid" alt="garage" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <div className="banner-1">
        <img src={Banner} alt="bannerphoto" className="img-fluid" />
      </div>
      <QualifiedSection />
      <WhyUsSection />
      <Aboutyatra />
    </>
  )
}

export default Home
