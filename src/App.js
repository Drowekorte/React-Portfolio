import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
          <Work />
          <Contact />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
