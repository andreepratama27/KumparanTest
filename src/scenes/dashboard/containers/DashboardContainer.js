import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardComponent from "@scenes/dashboard/components/DashboardComponent";
import { initUsers, initPosts, searchUser } from "@scenes/dashboard/actions/";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  search(data) {
    dispatch(searchUser(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
