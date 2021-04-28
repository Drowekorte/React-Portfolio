import React from 'react';
import { Link } from "react-router-dom";


function Contact() {
  return (
    <section>
      <div className="card">
        <h2>Contact</h2>
      </div>

      <div className="content">
        <ul>
          <li>
            Phone:<Link to="tel:602-363-0335">602.363.0335</Link>
          </li>
          <li>
            Email:<Link to="mailto:drowekorte@gmail.com">DRoweKorte@gmail.com</Link>
          </li>
          <li>
            Github:<Link href="https://github.com/Drowekorte/Portfolio">@DylanKorte</Link>
          </li>
        </ul>
      </div>
      <Link name="contact_me"></Link>
    </section>
  )
}

export default Contact;