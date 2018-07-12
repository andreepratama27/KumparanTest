import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardComponent from "@scenes/dashboard/components/DashboardComponent";
import { initUsers, initPosts } from "@scenes/dashboard/actions/";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(DashboardComponent);
