import classNames from 'classnames'
import './style.css'

const Footerbox = ({
  title,
  link3,
  link1,
  link2,
  image,
  image2,
  image1,
  display,
}) => {
  return (
    <div className="col-lg-3">
      <h3 className="ms-3">{title}</h3>

      <div
        className={classNames('footer-text', {
          'display-flex': display === 'inline',
        })}
      >
        <div className="d-flex align-items-center link">
          <div className="img-link ms-3">{image}</div>
          <div className="ms-3">{link1}</div>
        </div>
        <div className="d-flex align-items-center link">
          <div className="img-link ms-3">{image1}</div>
          <div className="ms-3">{link2}</div>
        </div>
        <div className="d-flex align-items-center link">
          <div className="img-link ms-3">{image2}</div>
          <div className="ms-3">{link3}</div>
        </div>
      </div>
    </div>
  )
}
export default Footerbox
