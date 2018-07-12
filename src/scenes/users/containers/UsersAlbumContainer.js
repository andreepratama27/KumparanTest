import React, { Component } from "react";
import { connect } from "react-redux";
import { initAlbumUser } from "@scenes/users/actions/";
import UsersAlbumComponent from "@scenes/users/components/UsersAlbumComponent";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserAlbum(data) {
    dispatch(initAlbumUser(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAlbumComponent);
