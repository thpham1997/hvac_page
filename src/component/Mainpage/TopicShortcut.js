import React from 'react';
import { useState, useEffect } from 'react';
import Shortcut from './Shortcut';
import pic1 from '../../img/pic1.jpg'
import pic2 from '../../img/pic2.jpg'
import pic3 from '../../img/pic3.jpg'
import pic4 from '../../img/pic4.jpg'
import { getPosts } from '../../model';
const Topicshortcut = (props) => {
  const [shortcuts, setShortcut] = useState([]);
  //   [{
  //     id: 1,
  //     aHref: '#',
  //     imgSrc: pic1,
  //     imgAlt: 'img alt',
  //     title: 'Laborum anim sunt veniam quis id eu pariatur.',
  //     desc: 'Adipisicing ad ad sunt dolore sint veniam sunt nostrud et minim non reprehenderit. Esse qui eiusmod excepteur et do laborum aliqua magna velit nisi aliquip velit quis ex. Proident laboris ut minim qui tempor. Tempor ullamco deserunt ipsum eu aliquip aliqua velit nisi. Incididunt labore consectetur cillum voluptate excepteur veniam velit laboris deserunt in quis cupidatat dolor. Labore anim non eu nulla deserunt non deserunt consectetur ut sint labore.',
  //   },
  //   {
  //     id: 2,
  //     aHref: '#',
  //     imgSrc: pic2,
  //     imgAlt: 'img alt',
  //     title: 'Ullamco fugiat nostrud ex commodo laborum.',
  //     desc: 'Esse aute ut deserunt id sint dolor aliqua tempor deserunt et labore consectetur officia minim. In enim amet mollit laboris irure sit officia eu Lorem qui amet eu. Sint nostrud do laborum excepteur reprehenderit esse do esse anim fugiat id nostrud officia irure. Duis do exercitation nostrud ex ut eiusmod. Nulla ea cupidatat dolor laboris fugiat irure consequat velit amet enim dolor. Labore quis eu sit pariatur anim. Quis qui Lorem sit nisi aute dolor eiusmod excepteur et esse consequat.',
  //   },
  //   {
  //     id: 3,
  //     aHref: '#',
  //     imgSrc: pic3,
  //     imgAlt: 'img alt',
  //     title: 'Fugiat et eiusmod in fugiat do eu aliqua aliquip sunt reprehenderit aliquip id ut consectetur.',
  //     desc: 'Reprehenderit occaecat anim duis ullamco consectetur aute qui magna nostrud officia ut deserunt ea sit. Occaecat cillum sit exercitation elit consectetur irure cupidatat dolore laborum reprehenderit Lorem veniam. Enim non ex ea ex laborum adipisicing id dolor irure nostrud dolore dolor in est.',
  //   },
  //   {
  //     id: 4,
  //     aHref: '#',
  //     imgSrc: pic4,
  //     imgAlt: 'img alt',
  //     title: 'Consectetur nisi irure dolore minim aliquip laboris ex exercitation irure consectetur ex elit quis ut.',
  //     desc: 'Reprehenderit occaecat anim duis ullamco consectetur aute qui magna nostrud officia ut deserunt ea sit. Occaecat cillum sit exercitation elit consectetur irure cupidatat dolore laborum reprehenderit Lorem veniam. Enim non ex ea ex laborum adipisicing id dolor irure nostrud dolore dolor in est.',
  //   },]
  // )

  // getPosts().then((value) =>{
  //   console.log(value);
  //   setShortcut(...value.map(v => Object.assign({}, v.data)));
  //   console.log(shortcuts);
  // },res => console.log(res));
  useEffect(() =>{
    getPosts().then((value) =>{
      console.log(value);
      setShortcut(...shortcuts, value.map(v => Object.assign({}, v.data)));
      console.log(shortcuts);
    },res => console.log(res));
  }, [])

  return (
    <div className={props.class}>
    {shortcuts.map(shortcut =>(
      <Shortcut key={shortcut.id} class='shortcut' aHref={shortcut.aHref} imgSrc={shortcut.imgSrc} imgAlt={shortcut.imgAlt} desc={shortcut.desc} title={shortcut.title} />
    ))}
    </div>
  );
}

export default Topicshortcut;
