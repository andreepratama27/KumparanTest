import React, { Component } from "react";
import { connect } from "react-redux";
import { viewPost, initComment } from "@scenes/posts/actions/";
import PostsShowComponent from "@scenes/posts/components/PostsShowComponent";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  viewSinglePost(id) {
    dispatch(viewPost(id));
  },

  initPostComment(id) {
    dispatch(initComment(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShowComponent);
