import React from 'react'
import { useRef } from 'react';
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
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

  function handleSignUpClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='form-signin-container'>
      <form className="form-signin">
        <div className="form-signin__group">
          <label className="form-signin__label">Email address: </label>
          <input ref={email} type="email" className="form-signin__input" placeholder="Enter Email" autoFocus={true} required={true} />
        </div>
        <div className="form-signin__group">
          <label className="form-signin__label">Password: </label>
          <input ref={password} type="password" className="form-signin__input" placeholder="Enter Password" required={true} />
        </div>
        <div className="form-signin__group">
          <button onClick={LoginUser} type="submit" className="form-signin__button">LOG IN</button>
        </div>
        <hr />
        <div className="form-signin__group">
          <Link to='/signup' onClick={handleSignUpClick}>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}
