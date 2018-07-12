import React, { Component } from "react";
import CommentGrid from "@components/CommentGrid";

class PostsShowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    const { match, viewSinglePost, initPostComment } = this.props;

    viewSinglePost(match.params.id);
    initPostComment(match.params.id);
  }

  _postComment() {
    this.props.addNewComment(this.state);
  }

  render() {
    const {
      posts: { article, comments }
    } = this.props;

    return (
      <main className="column content">
        <div className="column is-8">
          <h1>{article.title}</h1>
        </div>
        <div className="column column-body is-8">
          <p>{article.body}</p>
        </div>

        <div className="column is-8 set-column-height">
          <p className="title is-5">Give comments</p>
          <div className="field">
            <input
              className="input"
              placeholder="Type your title"
              onChange={e => this.setState({ title: e.target.value })}
            />
            <div className="add-spacing" />
          </div>
          <div className="field">
            <textarea
              className="textarea"
              placeholder="Type your comment"
              onChange={e => this.setState({ body: e.target.value })}
            />
            <div className="add-spacing" />
            <button
              className="button is-primary"
              onClick={() => this._postComment()}
            >
              Post Comment
            </button>
          </div>

          <div className="list-comment">
            <p className="subtitle is-5 title-comment">
              Show {comments.length} comment{comments.length > 1 ? "s" : ""}
            </p>
            {comments.map((v, keys) => (
              <CommentGrid key={keys} {...v} {...this.props} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default PostsShowComponent;
