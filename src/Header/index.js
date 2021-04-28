import React from 'react';
import { Link } from "react-router-dom";
import ProfilePicture from '../Images/Profile_picture.jpg';


function Header() {
  return (
    <header>
      <nav>
        <ul className="navUl">
          <li className="navItem"><Link className="navLink" to="#about_me">About Me</Link></li>
          <li className="navItem"><Link className="navLink" to="#work">Work</Link></li>
          <li className="navItem"><Link className="navLink" to="https://www.linkedin.com/in/dylan-korte/">LinkedIn</Link></li>
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