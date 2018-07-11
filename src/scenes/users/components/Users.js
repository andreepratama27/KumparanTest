import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <main className="column content">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
          </ul>
        </nav>

        <div className="columns">
          <div className="column">
            <h1>Users</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default Users;
