import React, { useRef } from 'react'
import { useState, useEffect } from "react";
import { createPost } from "../../model";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import myCKEditor from 'ckeditor5-custom-build/build/ckeditor'
import { useHistory } from "react-router";
import axios from "axios";
import { config } from 'dotenv'
import './_createblog.scss'


config();



export default function Createblog() {
  const history = useHistory();
  if (!localStorage.getItem('userId')) {
    alert('you need to log in to create a blog');
    history.push('/');
  }

  const [content, setContent] = useState('<h2>This is the body of your article<\h2>');

  const tags = useRef('');
  const title = useRef('');
  const avatar = useRef('');


  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(content);
    console.log(avatar.current.value);
    // document.querySelector('.createblog').innerHTML += content;
    if (!title.current.value || !tags.current.value || !avatar.current.value) {
      alert('You need to add title, body and upload the avatar')
    } else {
      const url = await uploadFile(avatar.current.files[0])
      await createPost(title.current.value, content, url, localStorage.getItem('userId'), tags.current.value.split(','))
      alert('Blog post created successfully, signing you in...')
      history.push('/')
    }
  }

  function HeaderImg(props) {
    return (
      <div className={`${props.parentName}__headerImg`}>
        <h2>CREATE POST</h2>
      </div>
    )
  }

  const ckeditorConfig = {
    link: {
      defaultProtocol: 'http://',
      decorators: {
        openInNewTab: {
          mode: 'manual',
          label: 'Open in a new tab',
          defaultValue: true,			// This option will be selected by default.
          attributes: {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        }
      }
    }

  }
  return (
    <div className='createblog'>
      <HeaderImg parentName='createblog'></HeaderImg>
      <form className="form-createblog">
        <div className="form-createblog__group">
          <label className="form-createblog__label" >Upload Image: </label>
          <input type="file" className="form-createblog__input" ref={avatar} />
        </div>
        <div className="form-createblog__group">
          <label className="form-createblog__label" htmlFor="title">Title</label>
          <input className="form-createblog__input" ref={title} type="text" placeholder="Post's title" required />
        </div>
        <div className="form-createblog__group">
          <label className="form-createblog__label" >Tags</label>
          <input className="form-createblog__input" ref={tags} type="text" placeholder='Separate tags by ","' required />
          {/* <div className="col-sm-4"></div> */}
        </div>
        <br /><br />
        <div className="form-createblog__group">
          <CKEditor
            editor={myCKEditor}
            data={content}
            config={ckeditorConfig}
            onReady={editor => { console.log(editor) }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data)
            }}
          />
        </div>
        <div className="form-createblog__group">
          {/* <div className="col-sm-5"></div> */}
          <button onClick={handleCreate} type="submit" className="form-createblog__button">Submit</button>
        </div>
      </form>
    </div>
  )
}

const uploadFile = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  const timeStamp = Date.now() / 1000;
  let formData = new FormData()
  formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
  formData.append("file", file);
  formData.append("public_id", "sample_image");
  formData.append("timestamp", timeStamp);
  formData.append("upload_preset", process.env.REACT_APP_PRESET);
  let respData = await axios.post(url, formData)
  return respData.data.secure_url
}



