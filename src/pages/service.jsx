import Line from 'components/Icons/line'
import Providebox from 'components/Providebox'
import Servicebox from 'components/Servicebox'
import { useEffect } from 'react'
import service from '../images/service.png'
import '../styles/service.css'
import AccidentalPhoto from '../images/accidental.png'
import BatteryPhoto from '../images/battery.png'
import BreakdownPhoto from '../images/breakdown.png'
import LubricantPhoto from '../images/lubricant.png'
import MinorMajorRepairPhoto from '../images/minor.png'
import PeriodicPhoto from '../images/perodic.png'
import PickupPhoto from '../images/pickup.png'
import SparesPhoto from '../images/spares.png'

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
    bg: 'grey',
  },
  {
    id: 6,
    title: 'Breakdown Service',
    bg: 'red',
  },
  {
    id: 7,
    title: 'Lubricant',
    bg: 'grey',
  },

  {
    id: 8,
    title: 'Spares Warranty',
    bg: 'red',
  },
]

const serviceData = [
  {
    id: 1,
    title: '1. Periodic Services',
    image: PeriodicPhoto,
    orintation: 'imageLast',
    description:
      'We all need to take care of our vehicles from time to time to ensure it is always up and running. Maintaining your vehicle will increase its shelf life and performance. As the wise man once said,” prevention is better than cure.”Yatra Nepal service station gives you timely reminders for servicing your two-wheeler so that you can enjoy your ride. Our timely reminders make sure that your vehicle engine is always pumping. Maintaining and taking care of your two-wheeler from time to time will also save you from a huge maintenance expense in one go. We email you, text you, and possibly anything to make sure your vehicle is fit and fine.',
  },
  {
    id: 2,
    title: '2. Minor & Major Repairs',
    image: MinorMajorRepairPhoto,
    orintation: 'imageFirst',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: '3. Accidental Repairs',
    image: AccidentalPhoto,
    orintation: 'imageLast',
    description:
      'Accidents are unintended consequences. This accident may result in significant damage to your automobiles as well as your wallet. The number of two-wheelers in India is constantly increasing with each passing second. And, regrettably, in this environment, there is a high risk of being involved in an accident at any time. It’s preferable if we prepare ahead of time. We also provide insurance and claims for all types of two-wheelers at Yatra Nepal Service Center. Two-wheeler insurance that covers both natural (floods, lighting, self-explosion, etc.) and man-made (accident, theft, damage during a riot, etc.) damage, has a cheap premium, and add-on coverage based on your needs is excellent.',
  },
  {
    id: 4,
    title: '4. Battery Service',
    image: BatteryPhoto,
    orintation: 'imageFirst',
    description:
      'The battery is a little-regarded component in the average motorcycle – until it dies and sees the owner stranded by the roadside.Such eventualities are unpleasant – and usually avoidable.',
    descriptiontwo:
      'Yatra Nepal provide battery repair service at very low price as well as new battery replacement service with 1 year warranty on it.',
  },
  {
    id: 5,
    title: '5. Breakdown Service',
    image: BreakdownPhoto,
    orintation: 'imageLast',
    description:
      'For many people, riding is a form of therapy. It allows them to relax and enjoy the feel of the breeze in their hair. However, there is a chance that you will have a breakdown while riding your two-wheeler, which will put an end to your carefree journey. And, without assistance, one may become much more stressed.',
    descriptiontwo:
      'Yatra Nepal Service Center provides roadside assistance to ensure that you don’t have to stop till you reach your destination. When you’re trapped on the road, we’ll come to your aid right away.',
  },
  {
    id: 6,
    title: '6. Pickup and Drop',
    image: PickupPhoto,
    orintation: 'imageFirst',
    description:
      'Yatra Nepal offers Roadside Assistance Services to make sure there is no stopping until you reach your destination. We provide immediate roadside service when you are stuck. These services range from mechanical breakdowns to accidental support. Be it major /minor repairs, battery change, and more we always committed to providing services to the ones in need. Our On-Road services make sure that you ride tension free under any circumstances. We are always there when you can find non',
  },
  {
    id: 7,
    title: '7. Lubricant',
    image: LubricantPhoto,
    orintation: 'imageLast',
    description:
      'While serving your two-wheelers, we utilize premium oils to ensure that they operate smoothly.The quality of engine oil has a significant impact on the performance, mileage, and overall shelf life of your two-wheeler. As a result, it’s critical to utilize premium lubricants on your prized two-wheeler. It is recommended that you check the oil in your two-wheeler once a month to verify that there is enough oil in it. If necessary, we recommend changing your oil to reduce friction in your vehicle’s engine. Changing your oil will improve the performance and efficiency of your vehicle, allowing it to go smoothly on any route.',
  },
  {
    id: 8,
    title: '8. Spares Warranty',
    image: SparesPhoto,
    orintation: 'imageFirst',
    description:
      'Maintenance is always thought to be costly. However, this is not the case in Yatra Nepal Service Center service centers. We make every effort to keep our premium services within reach of everyone. Whether you own a superbike or an ordinary bike, we ensure that your ride receives the best servicing in the multi-brand two-wheeler servicing market at an accessible and acceptable price. The majority of the parts fitted by Yatra Nepal Service Center are covered by a warranty. Yatra Nepal Service Center is certain that our spares will last a long time, but if one breaks, we will replace it for free within the guarantee period. ',
  },
]

const Service = () => {
  return (
    <>
      <div className="banner-service">
        <img src={service} className="img-fluid" alt="services" />
      </div>
      <div className="banner-provide">
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
                descriptiontwo={serviceItem.descriptiontwo}
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
