import React, { useRef } from 'react'
import { useState, useEffect } from "react";
import { createPost } from "../../model";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useHistory } from "react-router";
import axios from "axios";
import {config} from 'dotenv'


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
    if (!title.current.value || !tags.current.value || !avatar.current.value) {
      alert('You need to add title, body and upload the avatar')
    } else {
      const url = await uploadFile(avatar.current.files[0])
      await createPost(title.current.value, content, url, localStorage.getItem('userId'), tags.current.value.split(','))
      alert('Blog post created successfully, signing you in...')
      history.push('/')
    }
  }
  return (
    <form className="form-createblog">
      <div className="form__group">
        <label className="form__label" >Upload avatar</label>
        <input type="file" className="form__input" id="" ref={avatar} />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="title">Title</label>
        <input className="form__input" ref={title} type="text" id="" />
      </div>
      <div>
        <label className="form__label" >Tags</label>
        <input className="form__input" ref={tags} type="text" />
        {/* <div className="col-sm-4"></div> */}
      </div>
      <br /><br /><br />
      <div className="form__group">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          row={100}
          onReady={editor => { }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data)
          }}
        />
      </div>
      <div className="form__group">
        {/* <div className="col-sm-5"></div> */}
        <button onClick={handleCreate} type="submit" className="form__button">Submit</button>
      </div>
    </form>
  )
}

const uploadFile = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  const timeStamp = Date.now()/1000;
  let formData = new FormData()
  formData.append("api_key",process.env.REACT_APP_CLOUDINARY_API_KEY);
  formData.append("file", file);
  formData.append("public_id", "sample_image");
  formData.append("timestamp", timeStamp);
  formData.append("upload_preset", process.env.REACT_APP_PRESET);
  let respData = await axios.post(url, formData)
  return respData.data.secure_url
}



