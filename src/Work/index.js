import React from 'react';
import './CSS/style.css';
// import Jumbotron  from "react-bootstrap";
// import Nav from 'react-bootstrap/Nav';


function Work() {
  return (
    <section>
      <div className="card">
        <h2>Work</h2>
      </div>
      <div className="content">
        <div className="work_cards crop">
          <a href="#newpage"
          ><img
          className="big_proj image middle"
              src="assets/images/portfolio.jpg"
            /></a>
          <a href="https://note-taker--xyz.herokuapp.com/"
          ><img
          className="sm_proj1 image work_card"
              src="assets/images/Note-Taker-gif.gif"
            /></a>
          <a href="https://github.com/Drowekorte/Employee-Tracker.git"
          ><img
          className="sm_proj2 image work_card "
              src="assets/images/employee-tracker.gif"
            /></a>
          <a href="#newpage"
          ><img
          className="sm_proj3 image work_card"
              src="assets/images/Build-a-Band_logo.png"
            /></a>
          <a href="#newpage"
          ><img
          className="sm_proj1 image work_card"
              src="assets/images/JS_Pass_Gen1 copy.jpg"
            /></a>
          <a href="http://www.bkdesignaz.com/"
          ><img
          className="sm_proj2 image work_card"
              src="assets/images/website.jpg"
            /></a>
          <a href="#newpage"
          ><img
          className="sm_proj3 image work_card"
              src="assets/images/code_quiz.jpg"
            /></a>
        </div>
      </div>
      <a name="work"></a>
    </section>
  )
}

export default Work;