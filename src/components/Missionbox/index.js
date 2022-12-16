import classNames from 'classnames'
import './style.css'

const Missionbox = ({ title, description, image, color }) => {
  return (
    <div className="col-lg-6">
      <div
        className={classNames('box-mission text-white', {
          'background-grey': color === 'grey',
          'background-red': color === 'red',
        })}
      >
        <div className="box-mission-img text-center">
          <img src={image} className="img-fluid" />
        </div>
        <div className="box-mission-text p-5">
          <h3 className="text-center mt-4">{title}</h3>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
export default Missionbox
