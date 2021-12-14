
import React from 'react'
import worker from '../../img/worker1.jpg'
import { Link } from 'react-router-dom'
export default function Introduce(props) {
  return (
    <div className={`${props.parentName}__intro`}>
      <div className={`${props.parentName}__introText`}>
        <h2>This is a slogan: Ipsum culpa magna irure.</h2>
        <p>This is an introduction1: Lorem esse nulla elit consectetur elit excepteur aliqua pariatur.</p>
        <p>This is an introduction2: Lorem esse nulla elit consectetur elit excepteur aliqua pariatur.</p>
        <p>This is an introduction3: Lorem esse nulla elit consectetur elit excepteur aliqua pariatur.</p>
        <Link to="/">Our Service</Link>
      </div>
      <div className={`${props.parentName}__introImg`}>
        <img src={worker} alt='woker Image'></img>
        <div className={`${props.parentName}__introCard`}>
          <h2>Our Mission</h2>
          <p>Adipisicing pariatur ea eu. Deserunt cupidatat cillum voluptate est pariatur pariatur ex labore laborum eu est tempor do.</p>
        </div>
      </div>
    </div>
  )
}
