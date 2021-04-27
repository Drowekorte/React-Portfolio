import React from 'react';
import ProfilePicture from '../Images/Profile_picture.jpg';
import '/CSS/style.css';



function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href="#about_me"><li>About Me</li></a>
          <a href="#work"><li>Work</li></a>
          <a href="https://www.linkedin.com/in/dylan-korte/"><li>LinkedIn</li></a>

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