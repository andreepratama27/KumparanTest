import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <main className="column content">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
          </ul>
        </nav>

        <div className="columns">
          <div className="column">
            <h1>Posts</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default Posts;
