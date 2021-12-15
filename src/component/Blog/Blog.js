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
    let blog = await upvotePost(blogData.upvote + 1, id);
    setBlogData(blog);
  }

  const handleDownvote = async e => {
    let blog = await downvotePost(blogData.downvote + 1, id);
    setBlogData(blog);
  }

  useEffect(() => {
    let data = {};
    getPost(id).then(res => data = Object.assign({}, res.data));
    setBlogData(data);
  }, [id, blogData])
  return (
    <div className="blog">
      <img src={blogData.avatar} width="100%" height="400px" alt="" />
      <h1>{blogData.title}</h1>
      <span >{blogData.author && `Post by ${blogData.author.username}`} on {blogData.created__at}</span>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: blogData.body }}></div>
      <hr />
      <div>
        <button
          onClick={handleUpvote}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button> {blogData.upvote}
        {/* <span style={{ margin: "10px" }}></span> */}
        <button
          onClick={handleDownvote}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>{blogData.downvote}
      </div>
    </div>
  )
}
