import React from 'react';
import './CSS/style.css';

function Work() {
    return (
        <header>
      <nav>
        <ul>
          <a href="#about_me"><li>About Me</li></a>
          <a href="#work"><li>Work</li></a>
          <a href="https://www.linkedin.com/in/dylan-korte/"><li>LinkedIn</li></a>
         
        </ul>
      </nav>

      <div className="circle-img-1">
        <img src="assets/images/dylan-photo.jpg" />
        <div className="my_name">Dylan Korte</div>
      </div>
    </header>
      )
  }

export default Work;