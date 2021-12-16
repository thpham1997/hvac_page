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

  const navBarHandleClick = () => {
    document.querySelector(".navBar__list").classList.toggle("navBarListToggle");
    document.querySelectorAll(".navBar__list li").forEach((li, index) => {
      li.classList.toggle('liToggle');
      if (li.style.animation) {
        li.style.animationDelay = "";
        console.log(li.style.animation);
      } else {
        li.style.animationDelay = `${index / 5 + 0.3}s`;
      }
      // console.log(li.style.animation);
    })
    console.log("run handle click");
  }

  const DynamicSignup = ({ loggedIn }) => {
    const { pathname } = useLocation();
    const history = useHistory();

    const handleSignout = () => {
      localStorage.clear();
      history.push('/');
    }


    if (loggedIn) {
      return (
        <>
          <li className={pathname === "/create" ? "active" : ""}>
            <Link to="/create">New Blog</Link>
          </li>
          <li className={pathname === "/signout" ? "active" : ""} onClick={handleSignout}>
            <Link to="/signout">Sign out</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className={pathname === "/signup" ? "active" : ""}>
            <Link to="/signup">Sign up</Link>
          </li>
          <li className={pathname === "/signin" ? "active" : ""}>
            <Link to="/signin">Sign in</Link>
          </li>
        </>
      )
    }
  }
  // Add event for menu
  // the bavBarHandleClick run many times?
  useEffect(() => {
    const navBarButton = document.querySelector('.navBar svg');
    console.log(navBarButton.getAttribute('listener'));
    if (navBarButton.getAttribute('listener')) navBarButton.removeEventListener("click", navBarHandleClick);
    navBarButton.addEventListener("click", navBarHandleClick)
    console.log('run effect');
  }, [localStorage.getItem('userId') ? true : false])

  // update the loggedIn status every time user log in or log out
  useEffect(() => {
    let test = localStorage.getItem('userId') ? true : false;
    setLoggedIn(test);
    console.log(isLoggedIn);
  }, [localStorage.getItem('userId')])

  return (
    <div className='navBar'>
      <Link className="navBar__brandname" to='/'>HVAC Blog</Link>
      <ul className="navBar__list">
        <li className="navBar__home"><Link to="/">Home</Link></li>
        <li className="navBar__about"><Link to="/about">About</Link></li>
        <li className="navBar__services"><Link to="/services">Services</Link></li>
        <li className="navBar__works"><Link to="/works">Works</Link></li>
        <li className="navBar__blogs"><Link to="/blogs">Blogs</Link></li>
        <li className="navBar__signin"><Link to="/signin">Sign In</Link></li>
        <li className="navBar__signup"><Link to="/signup">Sign Up</Link></li>
      </ul>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default Navbar;
