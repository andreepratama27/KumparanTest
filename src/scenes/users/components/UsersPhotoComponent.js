import React, { Component, Fragment } from "react";

class UsersPhotoComponent extends Component {
  componentDidMount() {
    const { match, getUserPhotos } = this.props;

    getUserPhotos(match.params.idAlbum);
  }

  render() {
    const {
      user: { userPhotos }
    } = this.props;

    return (
      <Fragment>
        <div className="columns set-wrap set-column-height">
          {userPhotos &&
            userPhotos.map((v, keys) => (
              <div className="column is-2 column-photo" key={keys}>
                <img src={v.thumbnailUrl} />
              </div>
            ))}
        </div>
      </Fragment>
    );
  }
}

export default UsersPhotoComponent;
