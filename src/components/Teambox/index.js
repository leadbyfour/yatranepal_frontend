import classNames from 'classnames'
import './style.css'

const Infobox = ({ title, description, image, color, post }) => {
  return (
    <div className="col-lg-4">
      <div
        className={classNames('box-1 text-white', {
          'background-grey': color === 'grey',
          'background-red': color === 'red',
        })}
      >
        <div className="teambox-img text-center">
          <img src={image} className="img-fluid" alt="image" />
        </div>
        <div className="teambox-text p-5">
          <h3 className="text-center">{title}</h3>
          <h4 className="text-center">{post}</h4>
          <p className="mt-4">{description}</p>
          <div className="social-links text-center mt-4">
            <span class="fa-brands fa-facebook"></span>
            <span class="fa-brands fa-instagram ms-4"></span>
            <span class="fa-brands fa-twitter ms-4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Infobox
