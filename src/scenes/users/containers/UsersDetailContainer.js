import React, { Component } from "react";
import { connect } from "react-redux";
import UsersDetailComponent from "@scenes/users/components/UsersDetailComponent";
import { initOneUser } from "@scenes/users/actions/";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getOneUser(data) {
    dispatch(initOneUser(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersDetailComponent);
