import Banner from '../images/banner.png'
import Ticks from '../components/Icons/tick'
import Machine from '../images/machine.png'
import Garage from '../images/garage.png'
import Battery from 'components/Icons/battery'
import Mechanic from 'components/Icons/mechanic'
import Setting from 'components/Icons/setting'
import Infobox from 'components/InfoBox'
import ChainBreak from 'components/Icons/chainBreak'
import '../styles/home.css'

const Whyusdata = [
  {
    id: 1,
    image: <Battery />,
    title: 'Excellence at Service',
    description:
      'At Nepal Service Center we offer long lasting maintenance and servicing for all multi brands two wheelers.',
    bg: 'red',
  },
  {
    id: 2,
    image: <Mechanic />,
    title: 'Ride on Reliability',
    description:
      "Reliability and transparency are key elements of our business. Once your bike arrives at our workshop, you don't have to worry about anything.",
    bg: 'grey',
  },
  {
    id: 3,
    image: <Setting />,
    title: 'Skilled Team',
    description:
      'At yatra nepal we have team of skilled and well equipped people to ensure best services.',
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
            <div className="mt-5">
              <h2>We are qualified & of experience in this field</h2>
              <ul>
                <li className="mt-5">
                  <Ticks />
                  <span className="ms-3">
                    Servicing and maintenance of multi brand two wheers.
                  </span>
                </li>
                <li className="mt-5">
                  <Ticks />
                  <span className="ms-3">
                    On road Breakdown Support or service.
                  </span>
                </li>
                <li className="mt-5">
                  <Ticks />
                  <span className="ms-3">Spares warranty and many more.</span>
                </li>
              </ul>
            </div>
            <div className="chain-break-machine">
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
              Yatra Nepal Service Centre is the multi-brand two-wheeler
              servicing center in Nepal. Yatra Nepal Service Center offers
              cutting-edge two-wheeler repair and maintenance services. Yatra
              Nepal Service Center is revolutionizing two-wheeler servicing with
              wide range of dependable services.
            </p>
            <p>
              Yatra Nepal Service Center is started in 2022 and rapidly
              expanding around the country. Yatra Nepal Service Center
              specialize in “Service is our Strength.” which involves providing
              on-the-job training to transform individuals into skilled and
              professional service providers. This effort aims to help young
              people become financially self-sufficient while also improving the
              economy of the country.
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