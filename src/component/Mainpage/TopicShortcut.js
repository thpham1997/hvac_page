import React from 'react';
import { useState } from 'react';
import Shortcut from './Shortcut';
import testPic from '../../img/pexels-sergei-akulich-2539462.jpg'
const Topicshortcut = (props) => {
  const [shortcuts, setShortcut] = useState(
    [{
      id: 1,
      aHref: '#',
      imgSrc: testPic,
      imgAlt: 'img alt',
      desc: 'Adipisicing ad ad sunt dolore sint veniam sunt nostrud et minim non reprehenderit. Esse qui eiusmod excepteur et do laborum aliqua magna velit nisi aliquip velit quis ex. Proident laboris ut minim qui tempor. Tempor ullamco deserunt ipsum eu aliquip aliqua velit nisi. Incididunt labore consectetur cillum voluptate excepteur veniam velit laboris deserunt in quis cupidatat dolor. Labore anim non eu nulla deserunt non deserunt consectetur ut sint labore.',
    },
    {
      id: 2,
      aHref: '#',
      imgSrc: testPic,
      imgAlt: 'img alt',
      desc: 'Esse aute ut deserunt id sint dolor aliqua tempor deserunt et labore consectetur officia minim. In enim amet mollit laboris irure sit officia eu Lorem qui amet eu. Sint nostrud do laborum excepteur reprehenderit esse do esse anim fugiat id nostrud officia irure. Duis do exercitation nostrud ex ut eiusmod. Nulla ea cupidatat dolor laboris fugiat irure consequat velit amet enim dolor. Labore quis eu sit pariatur anim. Quis qui Lorem sit nisi aute dolor eiusmod excepteur et esse consequat.',
    },
    {
      id: 3,
      aHref: '#',
      imgSrc: testPic,
      imgAlt: 'img alt',
      desc: 'Reprehenderit occaecat anim duis ullamco consectetur aute qui magna nostrud officia ut deserunt ea sit. Occaecat cillum sit exercitation elit consectetur irure cupidatat dolore laborum reprehenderit Lorem veniam. Enim non ex ea ex laborum adipisicing id dolor irure nostrud dolore dolor in est.',
    },
    {
      id: 4,
      aHref: '#',
      imgSrc: testPic,
      imgAlt: 'img alt',
      desc: 'Reprehenderit occaecat anim duis ullamco consectetur aute qui magna nostrud officia ut deserunt ea sit. Occaecat cillum sit exercitation elit consectetur irure cupidatat dolore laborum reprehenderit Lorem veniam. Enim non ex ea ex laborum adipisicing id dolor irure nostrud dolore dolor in est.',
    },]
  )
  return (
    <div className={props.class}>
    {shortcuts.map(shortcut =>(
      <Shortcut class='shortcut' aHref={shortcut.aHref} imgSrc={shortcut.imgSrc} imgAlt={shortcut.imgAlt} desc={shortcut.desc} />
    ))}
    </div>
  );
}

export default Topicshortcut;
