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
            <button className="button is-primary">
              <span className="fa fa-plus" />
              &nbsp; Add new post
            </button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-12 wrapper-table-posts">
            <table className="table ">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {dashboard &&
                  dashboard.posts.map((v, keys) => (
                    <tr key={keys}>
                      <td>{v.title}</td>
                      <td>{v.body.substring(0, 100)}</td>
                      <td>
                        <a>Edit</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a className="is-danger">Delete</a>
                      </td>
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
