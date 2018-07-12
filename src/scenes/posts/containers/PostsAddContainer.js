import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "@scenes/posts/actions";
import PostsAddComponent from "@scenes/posts/components/PostsAddComponent";

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  posts: state.posts,
  idCollect: state.dashboard.users.map(v => v.id)
});

const mapDispatchToProps = dispatch => ({
  postArticle(data) {
    dispatch(addPost(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsAddComponent);
