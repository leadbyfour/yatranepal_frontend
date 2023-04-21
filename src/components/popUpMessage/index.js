import Circletick from 'components/Icons/circletick'
import Minus from 'components/Icons/minus'
import yatra from '../../images/yatra.png'
import './style.css'

const index = ({ status, closePopUp }) => {
  return (
    <>
      <div className="moodal p-3">
        <div className="popup-inner">
          <div className="row">
            <div className="col-4">
              <img src={yatra} className="img-fluid" alt="yatra" />
            </div>
            <div className="col-4 text-center">
              {status === 'success' && <Circletick />}
            </div>
            <div className="col-4 button-minus-div">
              <button
                className="button-minus"
                onClick={() => closePopUp(false)}
              >
                <Minus />
              </button>
            </div>
          </div>
          <p className="thank">
            {status === 'success' ? ' Thank You.' : 'Sorry !'}
          </p>
          <p className="mt-5 pop-msg text-center">
            {status === 'success'
              ? '  We received your message. Will get back to you soon.'
              : 'Invalid phone number. Please enter valid phone number'}
          </p>
        </div>
      </div>
    </>
  )
}

export default index
