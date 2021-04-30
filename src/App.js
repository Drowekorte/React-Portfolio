import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Work from './pages/Work';
import Body from './pages/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';


class App extends Component {
  state = {
    currentPage: ""
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Wrapper>
            <Route exact path="/" component={Body} />
            <Route exact path="/about" component={Body} />
            <Route exact path="/work" component={Work} />
          </Wrapper>
          <Contact />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
