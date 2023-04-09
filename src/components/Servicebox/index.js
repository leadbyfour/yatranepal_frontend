import classNames from 'classnames'
import Line from 'components/Icons/line'
import './style.css'

const Servicebox = ({
  title,
  image,
  description,
  orientation,
  descriptiontwo,
}) => {
  return (
    <>
      <div className="container">
        <div className="col-lg-12 service-desc">
          <h3 className="mb-5">{title}</h3>
          <div className="services-box justify-content-between row">
            <div
              className={classNames(
                'col-lg-6 justify-content-between image-order',
                {
                  'order-1': orientation === 'imageLast',
                },
              )}
            >
              <div className="service-image">
                <img src={image} className="img-fluid mb-5" />
                <Line />
              </div>
            </div>
            <div
              className={classNames(
                'col-lg-6 justify-content-between p-order',
                {
                  'order-2': orientation === 'imageFirst',
                },
              )}
            >
              {/* <div className="col-lg-6"> */}
              <div className="service-description">
                <p className="justified">{description}</p>
                <p className="mt-4 justified">{descriptiontwo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Servicebox
