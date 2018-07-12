import React from "react";
import { Link } from "react-router-dom";

const AlbumGrid = ({ title, match, id, all }) => (
  <div className="column is-2">
    <div className="card">
      <div className="card-image">
        <figure className="image image-full is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        {all ? (
          <Link className="title is-6" to={`/photos/${id}`}>
            {title}
          </Link>
        ) : (
          <Link
            className="title is-6"
            to={`/user/${match.params.id}/photos/${id}`}
          >
            {title}
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default AlbumGrid;
