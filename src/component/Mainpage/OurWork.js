import React from 'react'
import project1 from "../../img/singleWork1.jpg"
import project2 from "../../img/singleWork2.jpg"
import { Link } from 'react-router-dom';
export default function OurWork(props) {
  const maxWorkNum = 3;
  function Work(props) {
    const order = Number(props.order);
    return (
      <div className='singleWork'>
        <div className='singleWork__img'>
          <img src={props.source} alt='single work'></img>
        </div>
        <div className='singleWork__caption1'>
          <span>{order > 9 ? order + '.' : '0' + order + '.'}</span>
          <h2>{props.title}</h2>
        </div>
        <div className='singleWork__caption2'>
          <span>{order > 9 ? order + '.' : '0' + order + '.'}</span>
          <h2>{props.title}</h2>
          <p>{props.descripton}</p>
          <Link to='#'>Read more</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`${props.parentName}__works`}>
      <Work order={1} source={project1}
      title='Heating'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={2} source={project2}
      title='Air Conditioning'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={3} source={project1}
      title='Bath Remodeling'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={4} source={project2}
      title='Plumbing'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={5} source={project2}
      title='Electrical'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={6} source={project2}
      title='Build&Structure'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
      <Work order={7} source={project2}
      title='Engineer Consultant'
      descripton='Proident Lorem eiusmod laborum consectetur irure in consectetur Lorem esse quis.'></Work>
    </div>
  )
}
