import React from 'react';
import Button from './Button';
import User from './User';
import './_navbar.scss'
const Navbar = () => {
  return (
    <div className='navBar'>
      {/* <p>test font </p> */}
      <Button class='navBar__home' text='HOME'/>
      <Button class='navBar__topics' text='TOPICS'/>
      <User class='navBar__user'/>
    </div>
  );
}

export default Navbar;
