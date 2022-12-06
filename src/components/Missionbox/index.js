import classNames from 'classnames'
import './style.css'

const Missionbox = ({ title, description, image, color }) => {
  return (
    <div className="col-lg-6">
      <div
        className={classNames('box-1 text-white', {
          'background-grey': color === 'grey',
          'background-red': color === 'red',
        })}
      >
        <div className="box1-img text-center">
          <img src={image} className="img-fluid" />
        </div>
        <div className="box-text p-5">
          <h3 className="text-center">{title}</h3>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
export default Missionbox
