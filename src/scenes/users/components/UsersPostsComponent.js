import React, { Component } from "react";

class UsersPostsComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getUserPosts
    } = this.props;

    getUserPosts(params.id);
  }
  render() {
    return <h1>Users post component</h1>;
  }
}

export default UsersPostsComponent;
