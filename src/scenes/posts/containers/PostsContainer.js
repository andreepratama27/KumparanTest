import React, { Component } from "react";
import { connect } from "react-redux";
import PostsComponent from "@scenes/posts/components/PostsComponent";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(PostsComponent);
