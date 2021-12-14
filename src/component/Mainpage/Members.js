import React from 'react'
import { Link } from 'react-router-dom'
import worker1 from '../../img/worker1.jpg'
import worker2 from '../../img/worker2.jpg'
export default function Members(props) {

  function Member(props) {
    return (
      <div className='singleMember'>
        <div className='singleMember__img'>
          <img src={props.source} alt='single member'></img>
        </div>
        <div className='singleMember__info'>
          <h2>{props.name}</h2>
          <h3>{props.position}</h3>
        </div>
      </div>
    )
  }

  function Description() {
    return (
      <div className='description'>
        <h2>Qui culpa pariatur ullamco</h2>
        <p>Duis sint veniam labore esse commodo. Adipisicing eiusmod cillum laborum laborum ipsum duis minim aliquip dolor do incididunt. Consequat quis nisi anim cillum ad. Nulla laboris sint consequat minim aute non anim voluptate sint quis ex esse adipisicing.</p>
        <Link to='\contact'>Contact Us</Link>
      </div>
    )
  }
  return (
    <div className={`${props.parentName}__members`}>
      <Description></Description>
      <Member source={worker1} name='Johny Cage' position='Supervisor'></Member>
      <Member source={worker2} name='Michael Cage' position='Tech Staff'></Member>
      <Member source={worker1} name='Will Huge' position='Tech Staff'></Member>
      <Member source={worker2} name='Cena White' position='Tech Staff'></Member>
      <Member source={worker1} name='Liz Jennifer' position='Tech Staff'></Member>
    </div>
  )
}
