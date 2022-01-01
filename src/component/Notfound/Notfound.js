import { faSadCry } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './_notfound.scss'
export default function Notfound() {

  function HeaderImg(props) {
    return (
      <div className={`${props.parentName}__headerImg`}>
        <h2>WE ARE SORRY!</h2>
      </div>
    )
  }
  return (
    <div className='notfoundPage'>
      <HeaderImg parentName='notfoundPage' />
      <div className='notfoundPage__body'>
        <FontAwesomeIcon icon={faSadCry} />
        <Link to="/">Go Back to Home Page</Link>
      </div>
    </div>
  )
}
