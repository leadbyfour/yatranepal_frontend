import classNames from 'classnames'
import './style.css'

const Providebox = ({ title, color }) => {
  return (
    <div className="col-lg-3">
      <div
        className={classNames('text-white', {
          'background-grey': color === 'grey',
          'background-red': color === 'red',
        })}
      >
        <div className="service-box text-center">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  )
}
export default Providebox
