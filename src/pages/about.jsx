import Missionbox from 'components/Missionbox'
import Teambox from 'components/Teambox'
import about from 'images/about.png'
import { useEffect } from 'react'
import '../styles/about.css'
import MissionPhoto from '../images/mission.png'
import VisionPhoto from '../images/vision.png'
import MaheeshPhoto from '../images/maheesh.png'
import AjayPhoto from '../images/ajay.png'
import HariPhoto from '../images/hari.png'

const Missiondata = [
  {
    id: 1,
    image: MissionPhoto,
    title: 'Our Mission',
    description:
      'Our ultimate goal is to have a chain of multi-brand motorcycle workshops across the country and reach out to our customers as quickly as possible. Yatra Nepal Service Center specialize in “Service is our Strength.” which involves providing on-the-job training to transform individuals into skilled and professional service providers. This effort aims to help young people become financially self-sufficient while also improving the economy of the country.',
    bg: 'red',
  },
  {
    id: 2,
    image: VisionPhoto,
    title: 'Our Vision',
    description:
      'With each passing day, we strive to improve the ride and driving experience for each individual. We make sure you enjoy your trip while we take care of the rest during the trip.We ensure that customer satisfaction is at the heart of everything we do while improving the lives of our customers by providing quality products with best service.',
    bg: 'grey',
  },
]

const Teamdata = [
  {
    id: 1,
    image: MaheeshPhoto,
    title: 'Mahesh Gyawali',
    post: 'Chairman',
    description:
      'It is a long established fact that a reader will be distracted by the readable .',
    bg: 'red',
    linkfb: 'https://www.facebook.com/mahesh.gyawali.98',
    linkin: 'https://www.instagram.com/mohesxettrii/',
  },
  {
    id: 2,
    image: AjayPhoto,
    title: 'Ajay Singh',
    post: 'Vice-Chairman',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'grey',
    linkfb: 'https://www.facebook.com/ajay.singhthakuri.54',
  },
  {
    id: 3,
    image: HariPhoto,
    title: 'Hari Kumar Thakuri',
    post: 'Managing Director',
    description: 'It is a long established fact that a reader will be. It Is.',
    bg: 'red',
    linkfb: 'https://www.facebook.com/kumar.shah.777',
    linkin: 'https://www.instagram.com/kumarsinghthakuri/',
  },
]
const About = () => {
  return (
    <>
      <div className="banner-1">
        <img src={about} className="img-fluid" alt="about image" />
      </div>

      <div className="about-yatra">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-4">About Yatra Nepal</h1>
              <p className="text-white justified">
                Yatra Nepal Service Centre is the multi-brand two-wheeler
                servicing center in Nepal. Yatra Nepal Service Center offers
                cutting-edge two-wheeler repair and maintenance services. Yatra
                Nepal Service Center is revolutionizing two-wheeler servicing
                with wide range of dependable services such as pick-up and
                drop-off, on-road breakdown support, insurance coverage, Annual
                Maintenance Contracts, warranty programme on replacement parts,
                and lubricants. We provide quality services with outstanding
                packages that are aimed to provide you exceptional maintenance
                and savings. Yatra Nepal Service Center is a one-stop shop for
                all things two-wheeled.
              </p>
              <p className="text-white justified">
                Yatra Nepal Service Center is started in 2022 and rapidly
                expanding around the country. Yatra Nepal Service Center
                specialize in “Service is our Strength.” which involves
                providing on-the-job training to transform individuals into
                skilled and professional service providers. This effort aims to
                help young people become financially self-sufficient while also
                improving the economy of the country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mission-box">
        <div className="row justify-content-between">
          {Missiondata.map((missionItem) => (
            <Missionbox
              title={missionItem.title}
              description={missionItem.description}
              image={missionItem.image}
              color={missionItem.bg}
            />
          ))}
        </div>
      </div>

      <div className="banner-team mt-5 padtb">
        <div className="container">
          <h2 className="text-center meet-team my-5">Meet The Team</h2>
          <div className="row mt-3">
            {Teamdata.map((whyusItem) => (
              <Teambox
                title={whyusItem.title}
                description={whyusItem.description}
                post={whyusItem.post}
                image={whyusItem.image}
                color={whyusItem.bg}
                linkfb={whyusItem.linkfb}
                linkin={whyusItem.linkin}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default About
