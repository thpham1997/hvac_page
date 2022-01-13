import React from 'react'
import project1 from "../../img/singleWork1.jpg"
import project2 from "../../img/singleWork2.jpg"
import { Link } from 'react-router-dom';
import './_workpage.scss'
export default function Workpage(props) {
  const maxWorkNum = 6;
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

  function HeaderImg(props) {

    return (
      <div className={`${props.parentName}__headerImg`}>
        {/* <img src={props.source} alt='header Image'></img> */}
        <h2>WORKS</h2>
      </div>
    )
  }
  return (
    <div className='workPage'>
      <HeaderImg parentName='workPage' ></HeaderImg>
      <div className='workPage__works'>
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
    </div>
  )
}
