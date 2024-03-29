import classNames from 'classnames'
import './style.css'

const Teambox = ({
  title,
  description,
  image,
  color,
  post,
  linkfb,
  linkin,
}) => {
  return (
    <div className="col-lg-4">
      <div
        className={classNames('box-team text-white', {
          'background-grey': color === 'grey',
          'background-red': color === 'red',
        })}
      >
        <div className="teambox-img text-center">
          <img src={image} className="img-fluid" alt="image" />
        </div>
        <div className="teambox-text p-3">
          <h3 className="text-center">{title}</h3>
          <h4 className="text-center mt-3">{post}</h4>
          <p className="mt-4">{description}</p>
          <div className="social-links text-center mt-4">
            <a href={linkfb} class="fa fa-facebook"></a>
            <a href={linkin} class="fa fa-instagram ms-4"></a>
            <a class="fa fa-twitter ms-4"></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Teambox
