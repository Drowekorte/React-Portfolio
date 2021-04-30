import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';


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
            <Route exact path="/discover" component={Work} />
            <Route exact path="/search" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
