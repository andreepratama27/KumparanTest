import React, { Component, Fragment } from "react";

class UsersPostsComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getUserPosts
    } = this.props;

    getUserPosts(params.id);
  }

  render() {
    const {
      user: { userPosts }
    } = this.props;

    return (
      <Fragment>
        <div className="columns set-wrap">
          {userPosts &&
            userPosts.map((v, keys) => (
              <div className="column is-3" key={keys}>
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">{v.title}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">{v.body}</div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      Edit
                    </a>
                    <a href="#" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              </div>
            ))}
        </div>
      </Fragment>
    );
  }
}

export default UsersPostsComponent;
