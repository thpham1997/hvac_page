import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { downvotePost, getPost, upvotePost } from "../../model";
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './_blog.scss';
export default function Blog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const handleUpvote = async e => {
    if (localStorage.getItem("userId")) {
      let blog = await upvotePost(blogData.upvote + 1, id);
      setBlogData(blog);
    }else{
      alert("Please sign in to do this!");
    }
  }

  const handleDownvote = async e => {
    if (localStorage.getItem("userId")) {
      let blog = await downvotePost(blogData.upvote + 1, id);
      setBlogData(blog);
    }else{
      alert("Please sign in to do this!");
    }
  }

  function HeaderImg(props) {

    return (
      <div className={`${props.parentName}__headerImg`}
        style={{
          backgroundImage: `url(${props.source})`
        }}
      >
        <h2>{props.title}</h2>
      </div>
    )
  }
  // get post data
  useEffect(() => {
    getPost(id).then(res => {
      setBlogData(cur => cur = JSON.parse(JSON.stringify(res)));
      console.log(res);
    }, rej => {
      console.log(rej);
    }
    );
  }, [id])




  return (
    <div className="blog">
      <HeaderImg title={blogData.title}
        parentName="blog"
        source={blogData.avatar}
      />
      <div className="blog__body">
        <h1>{blogData.title}</h1>
        <span >{blogData.author && `Post by ${blogData.author.username}`} on {blogData.created__at}</span>
        <hr />
        <img src={blogData.avatar} alt="Blog Image"></img>
        <div className="blog__contents" dangerouslySetInnerHTML={{ __html: blogData.body }}></div>
        <hr />
        <div className="blog__control">
          <button
            onClick={handleUpvote}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <p>{blogData.upvote}</p>
          <button
            onClick={handleDownvote}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <p>{blogData.downvote}</p>
        </div>
      </div>
    </div>
  )
}
