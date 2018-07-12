import React, { Fragment, Component } from "react";
import AlbumGrid from "@components/AlbumGrid";

class UsersAlbumComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getUserAlbum
    } = this.props;

    getUserAlbum(params.id);
  }

  render() {
    const {
      user: { userAlbums }
    } = this.props;

    return (
      <Fragment>
        <div className="columns set-wrap set-column-height">
          {userAlbums &&
            userAlbums.map((v, keys) => (
              <AlbumGrid key={keys} {...v} {...this.props} />
            ))}
        </div>
      </Fragment>
    );
  }
}

export default UsersAlbumComponent;
