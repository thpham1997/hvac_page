import React from 'react';
import './_mainpage.scss'
import Backgroundheader from './BackgroundHeader'
const Mainpage = () => {
  return (
    <div className='mainPage'>
      <Backgroundheader class='mainPage__bgImage' header='THIS IS A TITLE'/>
    </div>
  );
}

export default Mainpage;
