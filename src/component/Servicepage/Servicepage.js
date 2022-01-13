import React from 'react'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
        <h2>{props.service}</h2>
        <p>{props.descrition}</p>
        <Link to={props.link}>
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
        <SingleService parentName='servicePage'
          icon={faCogs}
          service='Heating'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faIndustry}
          service='Air Conditioning'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faCogs}
          service='Bath Remodeling'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faIndustry}
          service='Plumbing'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faCogs}
          service='Electrical'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faIndustry}
          service='Buider & Structure'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
        <SingleService parentName='servicePage'
          icon={faCogs}
          service='Engineer Consultant'
          descrition='Ipsum sint elit quis dolor cillum eiusmod amet et amet labore eu enim ad sint.'
          link='#' />
      </div>

    </div>
  )
}
