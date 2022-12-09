import Missionbox from 'components/Missionbox'
import Teambox from 'components/Teambox'
import about from 'images/about.png'
import '../styles/about.css'

const Missiondata = [
  {
    id: 1,
    image: '../image/mission.png',
    title: 'Our Mission',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    bg: 'red',
  },
  {
    id: 2,
    image: '../image/vision.png',
    title: 'Our Vision',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    bg: 'grey',
  },
]

const Teamdata = [
  {
    id: 1,
    image: '../image/mahesh.png',
    title: 'lorem ipsum',
    post: 'Cheif Executive officer',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'red',
  },
  {
    id: 2,
    image: '../image/mahesh.png',
    title: 'lorem ipsum',
    post: 'Cheif Executive officer',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'grey',
  },
  {
    id: 3,
    image: '../image/mahesh.png',
    title: 'lorem ipsum',
    post: 'Cheif Executive officer',
    description:
      'It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.',
    bg: 'red',
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
              <p className="text-white">
                SpeedForce is India’s leading chain of multi-brand two-wheeler
                servicing franchise. We are one of its kind across the nation.
                We provide innovative repair and maintenance services for any
                two-wheelers. With our wide range of trustworthy services like
                pick up and drop facility, on-road breakdown support, insurance
                support, Annual Maintenance Contracts, warranty program on spare
                parts, and lubricants we are bringing a revolution in servicing
                of two-wheelers. With well-equipped two-wheeler service stations
                and skillful mechanics, we provide quality services with
                excellent packages that are intended to offer you great
                maintenance and saving. SpeedForce is a one-stop solution for
                all two-wheeler needs. We started in 2012 and we are growing
                speedily across the nation. Our franchises are operational in 16
                different states of the country and is speedily counting more.
                We are majorly into “ORGANISING THE UNORGANISED SECTOR” in which
                provide on-job training to an individual.
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default About
