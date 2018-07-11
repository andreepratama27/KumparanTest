import React, { Component } from "react";

class UsersComponent extends Component {
  render() {
    const { dashboard } = this.props;

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
        <div className="columns">
          <div className="column is-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {dashboard &&
                  dashboard.users.map((v, keys) => (
                    <tr key={keys}>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.phone}</td>
                      <td>{v.website}</td>
                      <td>{v.company.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default UsersComponent;
