import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './_blogreview.scss'
import React from 'react'
import pic3 from '../../img/headerImage.jpg'
export default function Blogreview({ id, title, author, avatar, upvote, downvote }) {

  return (
    <div className="blogreview">
      <img className="blogreview__img" /*height="50%"*/ src={avatar} alt="No Image" />
      <div className="blogreview__body">
        <h5 className="blogreview__title">{title}</h5>
        <p className="blogreview__text">Post created by {author.username}</p>
        <div className="blogreview__control">
          <button onClick={() => { alert('View this blog to upvote it') }}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </button> {upvote}
          {/* <span style={{ margin: "10px" }}></span> */}
          <button onClick={() => { alert('View this blog to downvote it') }}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>{downvote}
        </div>
        <Link to={`/blogs/${id}`} className="blogreview__link">Read blog</Link>
      </div>
    </div>
  )
}
