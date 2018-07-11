import React, { Component } from "react";

class Albums extends Component {
  render() {
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
            <h1>Albums</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default Albums;
