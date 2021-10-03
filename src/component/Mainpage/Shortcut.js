import React from 'react';

const Shortcut = (props) => {
  return (
    <div className={props.class}>
      <a href={props.href}>
        <img src={props.src} alt={props.alt}/> 
        <p>{props.desc}</p>
      </a>
    </div>
  );
}

export default Shortcut;
