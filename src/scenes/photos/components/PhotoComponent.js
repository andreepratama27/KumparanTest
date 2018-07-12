import React, { Component } from "react";

class PhotoComponent extends Component {
  componentDidMount() {
    const { match, getAllPhotoByAlbum } = this.props;

    getAllPhotoByAlbum(match.params.idAlbum);
  }

  render() {
    const { match, photos } = this.props;

    return (
      <main className="column content">
        <div className="columns">
          <div className="column">
            <h1>All photo from album {match.params.idAlbum}</h1>
          </div>
        </div>

        <div className="columns set-wrap set-height-for-albums">
          {photos &&
            photos.photos.map((v, keys) => (
              <div className="column is-2 column-photo" key={keys}>
                <img src={v.thumbnailUrl} />
              </div>
            ))}
        </div>
      </main>
    );
  }
}

export default PhotoComponent;
