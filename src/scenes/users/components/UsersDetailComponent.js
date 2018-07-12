import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import UsersDetailWrapper from "./UsersDetailWrapper";
import UsersPostsContainer from "@scenes/users/containers/UsersPostsContainer";
import UsersAlbumContainer from "@scenes/users/containers/UsersAlbumContainer";

class UsersDetailComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getOneUser
    } = this.props;

    getOneUser(params.id);
  }

  render() {
    const {
      user: { oneUser }
    } = this.props;

    return (
      <Router>
        <UsersDetailWrapper user={oneUser}>
          <Route exact path="/user/:id" component={UsersPostsContainer} />
          <Route path="/user/:id/albums" component={UsersAlbumContainer} />
        </UsersDetailWrapper>
      </Router>
    );
  }
}

export default UsersDetailComponent;
