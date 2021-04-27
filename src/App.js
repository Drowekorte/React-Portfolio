import React, { Component } from "react";
import Header from './Header';
import Body from './Body';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Work />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
