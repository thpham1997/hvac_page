import React from 'react';

const Shortcut = (props) => {
  return (
    <div className={props.class}>
      <img src={props.imgSrc} alt={props.imgAlt}/> 
      <a href={props.aHref}>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}

export default Shortcut;
