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
  mailTo,
  isSocialLink,
  socialLinks,
  displaytwo,
}) => {
  return (
    <div className="col-lg-3 col-md-6 mt-5">
      <h3 className="ms-3">{title}</h3>

      <div
        className={classNames('footer-text', {
          'display-flex': display === 'inline',
          'align-items-baseline': displaytwo === 'baseline',
          'ms-3': isSocialLink,
        })}
      >
        <div className="d-flex align-items-center link">
          {isSocialLink ? (
            <a href={socialLinks[0]}>{image}</a>
          ) : (
            <div className="img-link ms-3">{image}</div>
          )}
          <div className="ms-3 link1">{link1}</div>
        </div>
        <div className="d-flex align-items-center link">
          {isSocialLink ? (
            <a href={socialLinks[1]} className="ms-3">
              {image1}
            </a>
          ) : (
            <div className="img-link ms-3">{image1}</div>
          )}
          <div className="ms-3 pointer link2" onClick={mailTo ? mailTo : null}>
            {link2}
          </div>
        </div>
        <div className="d-flex align-items-center link">
          {isSocialLink ? (
            <a href={socialLinks[2]} className="ms-3">
              {image2}
            </a>
          ) : (
            <div className="img-link ms-3">{image2}</div>
          )}
          <div className="ms-3 pointer">{link3}</div>
        </div>
      </div>
    </div>
  )
}
export default Footerbox
