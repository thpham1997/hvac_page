import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './_navbar.scss'
const Navbar = () => {
  const { pathname } = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const navBarHandleClick = () => {
    document.querySelector(".navBar__list").classList.toggle("navBarListToggle");
    document.querySelectorAll(".navBar__list li").forEach((li, index) => {
      li.classList.toggle('liToggle');
      if (li.style.animation) {
        li.style.animationDelay = "";
        // console.log(li.style.animation);
      } else {
        li.style.animationDelay = `${index / 5 + 0.3}s`;
      }
      // console.log(li.style.animation);
    })
    console.log("run handle click");
  }

  // Add event for menu
  useEffect(() => {
    const navBarButton = document.querySelector('.navBar svg');
    navBarButton.addEventListener("click", navBarHandleClick)
    console.log('run effect');
  }, [])

  useEffect(() => {
    document.querySelector(".navBar__list").classList.remove("navBarListToggle");
    document.querySelectorAll(".navBar__list li").forEach((li, index) => {
      li.classList.remove('liToggle');
    })
  }, [isLoggedIn])

  // update the loggedIn status every time user log in or log out
  useEffect(() => {
    let loggedIn = localStorage.getItem('userId') ? true : false;
    setLoggedIn(loggedIn);
    console.log(isLoggedIn);
  }, [localStorage.getItem('userId')])

  // navBar switching between mode
  useEffect(() => {
    if (window.innerWidth < 641) {
      console.log(window.innerWidth);
    } else {
      console.log(window.innerWidth);
    }
  }, [isLoggedIn])


  function handleClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  function handleSignOut() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className='navBar'>
      <Link className="navBar__brandname" to='/' onClick={handleClick}>HVAC Blog</Link>
      <ul className="navBar__list">
        <li className="navBar__home" ><Link to="/" onClick={handleClick}>Home</Link></li>
        <li className="navBar__about" ><Link to="/about" onClick={handleClick}>About</Link></li>
        <li className="navBar__services" ><Link to="/services" onClick={handleClick}>Services</Link></li>
        <li className="navBar__works" ><Link to="/works" onClick={handleClick}>Works</Link></li>
        <li className="navBar__blogs" ><Link to="/blogs" onClick={handleClick}>Blogs</Link></li>
        {!isLoggedIn ? (<><li className="navBar__signin" ><Link to="/signin" onClick={handleClick}>Sign In</Link></li>
          <li className="navBar__signup" ><Link to="/signup" onClick={handleClick}>Sign Up</Link></li></>) : (<><li className="navBar__create" ><Link to="/create" onClick={handleClick}>Create</Link></li>
            <li className="navBar__signout" ><Link to="/" onClick={handleSignOut}>Sign Out</Link></li></>)}

      </ul>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default Navbar;
