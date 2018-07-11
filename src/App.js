import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Dashboard from "./scenes/dashboard/components/Dashboard";
import Users from "./scenes/users/components/Users";
import Posts from "./scenes/posts/components/Posts";
import Albums from "./scenes/albums/components/Albums";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
          <Route path="/albums" component={Albums} />
        </Wrapper>
      </Router>
      /*
      
      */
    );
  }
}

export default App;
