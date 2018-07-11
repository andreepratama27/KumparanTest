import React, { Component } from "react";
import { connect } from "react-redux";
import UsersComponent from "@scenes/users/components/UsersComponent";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(UsersComponent);
