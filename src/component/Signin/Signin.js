import React from 'react'
import { useRef } from 'react';
import { useHistory } from 'react-router'
import { loginUser } from '../../model';
import './_signin.scss';
export default function Signin() {
  let history = useHistory();
  if (localStorage.getItem("userId")) {
    history.push('/');
  }

  const email = useRef('');
  const password = useRef('');

  const LoginUser = async (e) => {
    e.preventDefault();
    const body = {
      email: email.current.value,
      password: password.current.value
    }
    console.log(body);

    if (!body.email || !body.password) {
      alert('You needd email or password');
    } else {
      const user = await loginUser(body.email, body.password)
      console.log(user);
      if (user) {
        localStorage.setItem('userId', user.data.id);
        localStorage.setItem('userName', user.data.userName);
        localStorage.setItem('email', user.data.email);
        console.log(localStorage.getItem('userId'));
        console.log(localStorage.getItem('userName'));
        console.log(localStorage.getItem('email'));
        alert('Signed in successfully!');
        history.push('/');
      } else {
        alert('Invalid email or password');
      }
    }
  }
  return (
    <form className="form-signin">
      <div className="form__group">
        <label className="form__label">Email address: </label>
        <input ref={email} type="email" className="form__input" placeholder="Enter email" />
      </div>
      <div className="form__group">
        <label className="form__label">Password: </label>
        <input ref={password} type="password" className="form__input" placeholder="Password" />
      </div>
      <div className="form__group">
        {/* <div className="col-sm-5"></div> */}
        <button onClick={LoginUser} type="submit" className="form__button">Signin</button>
      </div>
    </form>
  )
}
