import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { createUser } from '../../model';
import './_signup.scss';
export default function Signup() {
  const history = useHistory()
  if (localStorage.getItem('user')) {
    history.push('/');
  }
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');
  const username = useRef('');
  const confirm_password = useRef('');
  const loginUser = async (e) => {
    e.preventDefault();
    const body = {
      email: email.current.value,
      name: name.current.value,
      username: username.current.value,
      password: password.current.value
    }
    if (body.name && body.password && body.email && body.username && body.password === confirm_password.current.value) {
      const user = await createUser(body.name, body.email, body.username, body.password)
      console.log(user);
      if (!user) {
        alert('Email or username has been chosen')
      } else {
        localStorage.setItem('userId', user.id)
        localStorage.setItem('userName', user.userName)
        localStorage.setItem('email', user.email)
        history.push('/')
        alert('Account created sucessfully, signing you in...')
      }
    } else if (!name || !email || !username || !password) {
      alert('You didn\'t pass any value')
    } else {
      alert('Password and confirm password fields must be equal')
    }

    console.log(body)


  }

  return (
    <div className='form-signup-container'>
      <form className="form-signup">
        <div className="form-signup__group">
          <label className="form-signup__label">Name: </label>
          <input ref={name} type="text" className="form-signup__input" placeholder="Enter Name" />
        </div>
        <div className="form-signup__group">
          <label className="form-signup__label">Email address</label>
          <input ref={email} type="email" className="form-signup__input" placeholder="Enter email" />
        </div>
        <div className="form-signup__group">
          <label className="form-signup__label">Username: </label>
          <input ref={username} type="text" className="form-signup__input" placeholder="Enter username" />
        </div>
        <div className="form-signup__group">
          <label className="form-signup__label">Password</label>
          <input ref={password} type="password" className="form-signup__input" placeholder="Password" />
        </div>
        <div className="form-signup__group">
          <label className="form-signup__label">Confirm Password</label>
          <input ref={confirm_password} type="password" className="form-signup__input" placeholder="Password" />
        </div>
        <div className="form-signup__group">
          {/* <div className="col-sm-5"></div> */}
          <button onClick={loginUser} type="submit" className="form-signup__button">Sign Up</button>
        </div>
      </form>
    </div>
  )
}
