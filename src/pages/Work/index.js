import React from 'react';
import portfolioWork from '../../Images/portfolio.jpg';
import noteTaker from '../../Images/Note-Taker-gif.gif';
import employeeTracker from '../../Images/employee-tracker.gif';
import buildABand from '../../Images/Build-a-Band_logo.png';
import passGen from '../../Images/JS_Pass_Gen1 copy.jpg';
import website from '../../Images/website.jpg';
import codeQuiz from '../../Images/code_quiz.jpg';



function Work() {
  return (
    <section>
      <div className="card">
        <h2>Work</h2>
      </div>
      <div className="content">
        <div className="work_cards crop">
          <a href="#newpage"><img className="big_proj image middle" alt="A large screenshot of Dylan's portfolio" src={portfolioWork} />
          </a>
          <a href="https://note-taker--xyz.herokuapp.com/"><img className="sm_proj1 image work_card" alt="A git of a note taker application" src={noteTaker}/>
          </a>
          <a href="https://github.com/Drowekorte/Employee-Tracker.git"><img className="sm_proj2 image work_card " alt="A terminal screenshot of an employee tracker" src={employeeTracker}/>
          </a>
          <a href="#newpage"><img className="sm_proj3 image work_card" alt="A fun cartoon monster with drumsticks" src={buildABand}/>
          </a>
          <a href="#newpage"><img className="sm_proj1 image work_card" alt="A large screenshot of a password generator application" src={passGen}/>
          </a>
          <a href="http://www.bkdesignaz.com/"><img className="sm_proj2 image work_card" alt="A screenshot of a website designed by Dylan" src={website}/>
          </a>
          <a href="#newpage"><img className="sm_proj3 image work_card" alt="A screenshot of a code quiz" src={codeQuiz}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work;