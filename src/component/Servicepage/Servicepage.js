import React from 'react'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './_servicepage.scss'
export default function Servicepage() {

  function HeaderImg(props) {

    return (
      <div className={`${props.parentName}__headerImg`}>
        {/* <img src={props.source} alt='header Image'></img> */}
        <h2>SERVICES</h2>
      </div>
    )
  }

  function SingleService(props) {

    return (
      <div className={`${props.parentName}__singleService`} >
        <div className={`${props.parentName}__icon`}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <h2>In Tondonon</h2>
        <p>Duis id do incididunt Lorem irure et id duis mollit sunt Lorem sint. Lorem proident labore amet pariatur qui deserunt commodo ullamco eiusmod laborum. Cillum amet magna laborum irure dolor magna.</p>
        <Link to='#'>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Link>
      </div>
    )
  }
  return (
    <div className='servicePage'>
      {/* TODO */}
      <HeaderImg parentName='servicePage' ></HeaderImg>
      <div className='servicePage__services'>
        <SingleService parentName='servicePage' icon={faCogs} />
        <SingleService parentName='servicePage' icon={faIndustry} />
        <SingleService parentName='servicePage' icon={faCogs} />
        <SingleService parentName='servicePage' icon={faIndustry} />
        <SingleService parentName='servicePage' icon={faCogs} />
        <SingleService parentName='servicePage' icon={faIndustry} />
      </div>

    </div>
  )
}
