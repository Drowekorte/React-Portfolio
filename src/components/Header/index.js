import React from 'react';
import { Link } from "react-router-dom";
import ProfilePicture from '../../Images/Profile_picture.jpg';


function Header() {
  return (
    <header>
      <nav>
        <ul className="navUl">
          <li className="navItem">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/about"
                ? "navLink active"
                : "navLink"}>
              About Me
            </Link>
          </li>
          <li className="navItem">
          <Link
              to="/"
              className={window.location.pathname === "/work" || window.location.pathname === "/work"
                ? "navLink active"
                : "navLink"}>
              Work
            </Link>
          </li>
          <li className="navItem">
            <a className="navLink"
              href="https://www.linkedin.com/in/dylan-korte/">LinkedIn</a>
          </li>
        </ul>
      </nav>

      <div class="circle-img-1">
        <img className="profile-photo" src={ProfilePicture} alt={"Dylan Korte"} />
        <div className="my_name">Dylan Korte</div>
      </div>
    </header>
  )
}

export default Header;