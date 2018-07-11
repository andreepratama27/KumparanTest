import React, { Component } from "react";

class PostsComponent extends Component {
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
              <a href="#">Posts</a>
            </li>
          </ul>
        </nav>

        <div className="columns">
          <div className="column">
            <h1>Posts</h1>
          </div>
        </div>

        <div className="columns">
          <div className="column is-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {dashboard &&
                  dashboard.posts.map((v, keys) => (
                    <tr key={keys}>
                      <td>{v.title}</td>
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

export default PostsComponent;
