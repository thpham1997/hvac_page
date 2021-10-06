import React from 'react';
import './_mainpage.scss'
import Backgroundheader from './BackgroundHeader'
import Topicshortcut from './TopicShortcut';
const Mainpage = () => {
  return (
    <div className='mainPage'>
      <Backgroundheader class='mainPage__bgImage' header='HVAC Group-Working for The Best'/>
      <Topicshortcut class='mainPage__topicShortcut'/>
    </div>
  );
}

export default Mainpage;
