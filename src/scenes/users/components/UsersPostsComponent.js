import React, { Component, Fragment } from "react";

class UsersPostsComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getUserPosts
    } = this.props;

    getUserPosts(params.id);
  }

  _deletePosts(data) {
    const { deletePostsUser } = this.props;

    deletePostsUser(data);
  }

  render() {
    const {
      user: { userPosts }
    } = this.props;

    return (
      <Fragment>
        <div className="columns set-wrap set-column-height">
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
                    <a
                      className="card-footer-item"
                      onClick={() =>
                        this._deletePosts({
                          id: v.id,
                          idUser: this.props.match.params.id
                        })
                      }
                    >
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
