import React, { Component } from "react";
import Header from './Header';
import Body from './Body';
import Work from './Work';
import Footer from './Footer';
import './CSS/style.css';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Work />
        <Footer />
      </div>
    )
  }
}

export default App;
