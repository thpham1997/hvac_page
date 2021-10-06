import React from 'react';

const Shortcut = (props) => {
  return (
    <div className={props.class}>
      <img src={props.imgSrc} alt={props.imgAlt}/> 
      <a href={props.aHref}>
        <h1>{props.title} </h1>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}

export default Shortcut;
