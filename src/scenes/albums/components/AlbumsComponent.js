import React, { Component } from "react";
import AlbumGrid from "@components/AlbumGrid";

class AlbumsComponent extends Component {
  render() {
    const {
      dashboard: { albums }
    } = this.props;

    console.log(albums);

    return (
      <main className="column content">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
          </ul>
        </nav>

        <div className="columns">
          <div className="column">
            <h1>All Albums</h1>
          </div>
        </div>

        <div className="columns set-wrap set-height-for-albums">
          {albums.map((v, keys) => (
            <AlbumGrid key={keys} {...v} {...this.props} all={true} />
          ))}
        </div>
      </main>
    );
  }
}

export default AlbumsComponent;
