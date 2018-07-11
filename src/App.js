import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import DashboardContainer from "./scenes/dashboard/containers/DashboardContainer";
import UsersContainer from "./scenes/users/containers/UsersContainer";
import UsersDetailContainer from "./scenes/users/containers/UsersDetailContainer";
import PostsContainer from "./scenes/posts/containers/PostsContainer";
import Albums from "./scenes/albums/components/Albums";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={DashboardContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/user/:id" component={UsersDetailContainer} />
          <Route path="/posts" component={PostsContainer} />
          <Route path="/albums" component={Albums} />
        </Wrapper>
      </Router>
      /*
      
      */
    );
  }
}

export default App;
