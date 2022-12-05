import Providebox from 'components/Providebox'
import Servicebox from 'components/Servicebox'
import service from '../images/service.png'
import '../styles/service.css'

const provideData = [
  {
    id: 1,
    title: 'Periodic Service',
    bg: 'red',
  },
  {
    id: 2,
    title: 'Minor & Major Repairs',
    bg: 'grey',
  },
  {
    id: 3,
    title: 'Accidental Repairs',
    bg: 'red',
  },
  {
    id: 4,
    title: 'Battery Service',
    bg: 'grey',
  },
  {
    id: 5,
    title: 'Pickup & Drop',
    bg: 'red',
  },
  {
    id: 6,
    title: 'Breakdown Service',
    bg: 'grey',
  },
  {
    id: 7,
    title: 'Value Added Services',
    bg: 'red',
  },

  {
    id: 8,
    title: 'Recondition',
    bg: 'grey',
  },
]

const serviceData = [
  {
    id: 1,
    title: '1.Periodic Services',
    image: '../image/perodicimage.png',
    orintation: 'imageLast',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: '2. Minor & Major Repairs',
    image: '../image/battery.png',
    orintation: 'imageFirst',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: '3. Accidental Repaiirs',
    image: '../image/perodicimage.png',
    orintation: 'imageLast',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    title: '4. Battery Service',
    image: '../image/battery.png',
    orintation: 'imageFirst',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    title: '5. Breakdown Service',
    image: '../image/perodicimage.png',
    orintation: 'imageLast',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    title: '6. Pickup and Drop',
    image: '../image/battery.png',
    orintation: 'imageFirst',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 7,
    title: '7. Value Added Services',
    image: '../image/perodicimage.png',
    orintation: 'imageLast',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 8,
    title: '8. Recondition',
    image: '../image/battery.png',
    orintation: 'imageFirst',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

const Service = () => {
  return (
    <>
      <div className="banner-service">
        <img src={service} className="img-fluid" alt="services" />
      </div>
      <div className="banner-3">
        <div className="container">
          <h1 className="my-5">What We Provide?</h1>
          <div className="row gy-5">
            {provideData.map((provideusdata) => (
              <Providebox
                title={provideusdata.title}
                color={provideusdata.bg}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="banner-4 padtb">
        <div className="container">
          <div className="row">
            {serviceData.map((serviceItem) => (
              <Servicebox
                title={serviceItem.title}
                image={serviceItem.image}
                description={serviceItem.description}
                orintation={serviceItem.orintation}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
