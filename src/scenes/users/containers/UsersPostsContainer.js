import React, { Component } from "react";
import { connect } from "react-redux";
import { initPostsUser } from "@scenes/users/actions/";
import UsersPostsComponent from "@scenes/users/components/UsersPostsComponent";

const mapStateToProps = state => ({
  posts: state.post
});

const mapDispatchToProps = dispatch => ({
  getUserPosts(data) {
    dispatch(initPostsUser(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPostsComponent);