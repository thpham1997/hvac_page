import React from 'react';
import './_mainpage.scss'
import Backgroundheader from './BackgroundHeader'
import Topicshortcut from './TopicShortcut';
import Introduce from './Introduce';
import OurWork from './OurWork';
const Mainpage = () => {
  return (
    <div className='mainPage'>
      <Backgroundheader class='mainPage__bgImage' header='HVAC Group-Working for The Best'/>
      {/* <Topicshortcut class='mainPage__topicShortcut'/> */}
      <Introduce parentName='mainPage'></Introduce>
      <OurWork parentName='mainPage'></OurWork>
    </div>
  );
}

export default Mainpage;
