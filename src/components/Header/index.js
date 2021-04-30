import React from 'react';
import ProfilePicture from '../Images/Profile_picture.jpg';


function Header(props) {
  return (
    <header>
      <nav>
        <ul className="navUl">
          <li className="navItem">
            <a
              className="navLink"
              href="#about_me"
              onClick={() => props.handlePageChange("About Me")}
              className={props.currentPage === "About Me" ? "nav-link active" : "nav-link"}>About Me</a>
          </li>
          <li className="navItem">
            <a className="navLink"
              href="#work"
              onClick={() => props.handlePageChange("Work")}
              className={props.currentPage === "Work" ? "nav-link active" : "nav-link"}>Work</a>
          </li>
          <li className="navItem">
            <a className="navLink"
              href="https://www.linkedin.com/in/dylan-korte/"
              onClick={() => props.handlePageChange("LinkedIn")}
              target="_blank"
              className={props.currentPage === "LinkedIn" ? "nav-link active" : "nav-link"}>LinkedIn</a>
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