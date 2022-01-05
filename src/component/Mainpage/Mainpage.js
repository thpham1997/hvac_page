import React from 'react';
import './_mainpage.scss'
import Backgroundheader from './BackgroundHeader'
import Topicshortcut from './TopicShortcut';
import Introduce from './Introduce';
import OurWork from './OurWork';
import Members from './Members';
const Mainpage = () => {
  return (
    <div className='mainPage'>
      <Backgroundheader class='mainPage__bgImage' header='HVAC Group-Working for The Best'/>
      <Introduce parentName='mainPage'></Introduce>
      <OurWork parentName='mainPage'></OurWork>
      <Members parentName='mainPage'></Members>
    </div>
  );
}

export default Mainpage;
