import React from 'react';
import { Link } from "react-router-dom";


function Body() {
  return (
    <section>
    <div className="card">
      <h2>About Me</h2>
    </div>
    <div className="content">
      <p>
        Jr. Front-end Web Developer, with Fullstack capabilities, human jungle
        gym, yoga novice, resource collector/connector, and humble life-long
        learner. Occupying the mental space between impassioned truth seeker
        and peaceful believer, harmonizing client intent with dynamic web
        solutions where form follows function.
      </p>
    </div>
    <Link name="about_me"></Link>
  </section>
  )
}

export default Body;