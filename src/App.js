import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import DashboardContainer from "./scenes/dashboard/containers/DashboardContainer";
import UsersContainer from "./scenes/users/containers/UsersContainer";
import UsersDetailContainer from "./scenes/users/containers/UsersDetailContainer";
import PostsContainer from "./scenes/posts/containers/PostsContainer";
import PostsAddContainer from "./scenes/posts/containers/PostsAddContainer";
import PostsShowContainer from "./scenes/posts/containers/PostsShowContainer";
import PhotoContainer from "./scenes/photos/containers/PhotoContainers";
import AlbumsContainer from "./scenes/albums/containers/AlbumsContainer";
import { connect } from "react-redux";

import { initUsers, initPosts, initAlbums } from "@scenes/dashboard/actions/";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  getAllUsers() {
    dispatch(initUsers());
  },

  getAllPosts() {
    dispatch(initPosts());
  },

  getAllAlbums() {
    dispatch(initAlbums());
  }
});

class App extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllPosts();
    this.props.getAllAlbums();
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={DashboardContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/user/:id" component={UsersDetailContainer} />
          <Route path="/posts" component={PostsContainer} />
          <Route path="/post/add" component={PostsAddContainer} />
          <Route path="/post/show/:id" component={PostsShowContainer} />
          <Route path="/albums" component={AlbumsContainer} />
          <Route path="/photos/:idAlbum" component={PhotoContainer} />
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
