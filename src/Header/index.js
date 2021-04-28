import React from 'react';
import ProfilePicture from '../Images/Profile_picture.jpg';


function Header() {
  return (
    <header>
      <nav>
        <ul className="navUl">
          <li className="navItem"><a className="navLink" href="#about_me">About Me</a></li>
          <li className="navItem"><a className="navLink" href="#work">Work</a></li>
          <li className="navItem"><a href="https://www.linkedin.com/in/dylan-korte/" className="navLink">LinkedIn</a></li>
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