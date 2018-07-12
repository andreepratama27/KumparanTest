import React, { Component } from "react";
import { API } from "@services/APIServices";
import { Link } from "react-router-dom";

class PostsComponent extends Component {
  componentDidMount() {
    this._deletePosts = this._deletePosts.bind(this);
  }

  _deletePosts(v) {
    API()
      .delete(`/posts/${v.id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            <h1>All Posts</h1>
            <Link to={`/post/add`} className="button is-primary">
              <span className="fa fa-plus" />
              &nbsp; Add new post
            </Link>
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
                        <Link to={`/post/show/${v.id}`}>View</Link>
                        <span>&nbsp;|&nbsp;</span>
                        <a>Edit</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a
                          className="is-danger"
                          onClick={() => this._deletePosts(v)}
                        >
                          Delete
                        </a>
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
