import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostsAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      tita: "",
      boda: ""
    };
  }

  _postArticle() {
    this.props.postArticle({ data: this.state });
  }

  render() {
    const { idCollect, posts } = this.props;
    return (
      <main className="column content">
        {posts.success && (
          <div className="notification is-primary">
            <button className="delete" />
            Success submiting article. <Link to="/posts">See all posts</Link>
          </div>
        )}

        <div className="columns">
          <div className="column">
            <h1>Add new posts</h1>
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label">User ID</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={e => this.setState({ userId: e.target.value })}
                >
                  {idCollect &&
                    idCollect.map((v, keys) => <option key={keys}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Type your post title"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Type your description"
                onChange={e => this.setState({ body: e.target.value })}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                onClick={() => this._postArticle()}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default PostsAddComponent;
