import React from 'react'
import Introduce from '../Mainpage/Introduce'
import Members from '../Mainpage/Members'
import './_aboutpage.scss'
export default function Aboutpage() {

  function HeaderImg(props){

    return(
      <div className={`${props.parentName}__headerImg`}>
        {/* <img src={props.source} alt='header Image'></img> */}
        <h2>ABOUT US</h2>
      </div>
    )
  }


  return (
    <div className='aboutPage'>
      {/* TODO */}
      <HeaderImg parentName='aboutPage' ></HeaderImg>
      <Introduce parentName='aboutPage'></Introduce>
      <Members parentName='aboutPage'></Members>
      {/* Members again */}
    </div>
  )
}
