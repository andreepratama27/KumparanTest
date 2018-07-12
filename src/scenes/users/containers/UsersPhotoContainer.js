import React, { Component } from "react";
import UsersPhotoComponent from "@scenes/users/components/UsersPhotoComponent";
import { connect } from "react-redux";
import { initPhotoUser } from "@scenes/users/actions/";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserPhotos(id) {
    dispatch(initPhotoUser(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPhotoComponent);
