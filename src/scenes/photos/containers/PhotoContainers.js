import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoComponent from "@scenes/photos/components/PhotoComponent";
import { initPhotoPerAlbum } from "@scenes/photos/actions/";

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  getAllPhotoByAlbum(id) {
    dispatch(initPhotoPerAlbum(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoComponent);
