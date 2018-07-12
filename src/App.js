import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import DashboardContainer from "./scenes/dashboard/containers/DashboardContainer";
import UsersContainer from "./scenes/users/containers/UsersContainer";
import UsersDetailContainer from "./scenes/users/containers/UsersDetailContainer";
import PostsContainer from "./scenes/posts/containers/PostsContainer";
import Albums from "./scenes/albums/components/Albums";
import { connect } from "react-redux";

import { initUsers, initPosts } from "@scenes/dashboard/actions/";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  getAllUsers() {
    dispatch(initUsers());
  },

  getAllPosts() {
    dispatch(initPosts());
  }
});

class App extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllPosts();
  }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
