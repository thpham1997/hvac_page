import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const User = (props) => {
  return (
    <button className={props.class}> 
      <FontAwesomeIcon icon={faUser}/>
    </button>
  );
}

export default User;
