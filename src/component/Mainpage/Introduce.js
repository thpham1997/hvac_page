
import React from 'react'
import worker from '../../img/worker1.jpg'
import { Link } from 'react-router-dom'
export default function Introduce(props) {
  return (
    <div className={`${props.parentName}__intro`}>
      <div className={`${props.parentName}__introText`}>
        <h2>Your satisfaction is Our responsibility </h2>
        <p>This will be your best choice when you come to us</p>
        <p>Welcome to  HVACGROUPMD. - Heating and Cooling ; experts in heating and air conditioning repair in Maryland, While over forty years in the air conditioning business,  HVACGROUPMD Services. - Heating and Cooling has worked hard to earn a reputation of being an outstanding full-service HVAC business, providing unmatched air conditioning troubleshooting, ac repair and air conditioner installation in Maryland.</p>
        <Link to="/services">Our Service</Link>
      </div>
      <div className={`${props.parentName}__introImg`}>
        <img src={worker} alt='woker Image'></img>
        <div className={`${props.parentName}__introCard`}>
          <h2>Our Mission</h2>
          <p>HVACGROUPMD. - Heating and Cooling has worked hard to earn a reputation of being an outstanding full-service HVAC business, providing unmatched air conditioning troubleshooting, ac repair and air conditioner installation in MD, VA, DC... </p>
        </div>
      </div>
    </div>
  )
}
