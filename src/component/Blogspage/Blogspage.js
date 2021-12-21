import React from 'react'
import { getPosts } from '../../model';
import { useState, useEffect } from 'react';
import Blogreview from '../Blogreview/Blogreview';
import './_blogspage.scss'
export default function Blogspage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getPosts().then(res => {
      // setBlogs(JSON.parse(JSON.stringify(res.data)))
      console.log(res.data);
      setBlogs(cur => cur = JSON.parse(JSON.stringify(res.data)));
      console.log(blogs);
    }, rej => {
      console.log(rej);
    })
  }, [])

  function HeaderImg(props) {
    return (
      <div className={`${props.parentName}__headerImg`}>
        {/* <img src={props.source} alt='header Image'></img> */}
        <h2>BLOGS</h2>
      </div>
    )
  }
  return (
    <div className='blogsPage'>
      <HeaderImg parentName='blogsPage'></HeaderImg>
      {console.log(blogs)}
      {
        <div className='blogsPage__reviews'>
          {
            blogs.map((b, id) => {
              let data = b.data;
              let author = b.data.author;
              console.log(data, author);
              return (
                <Blogreview
                  key={id}
                  id={author.id}
                  title={data.title}
                  author={author}
                  avatar={data.avatar}
                  upvote={data.upvote}
                  downvote={data.downvote}>
                </Blogreview>
              )
            })
          }
        </div>
        // blogs.data
        // console.log(blogs.data)
      }
    </div>
  )
}
