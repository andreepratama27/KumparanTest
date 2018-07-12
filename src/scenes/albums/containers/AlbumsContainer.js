import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumsComponent from "@scenes/albums/components/AlbumsComponent";

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(AlbumsComponent);
