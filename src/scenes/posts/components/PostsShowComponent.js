import React, { Component } from "react";
import CommentGrid from "@components/CommentGrid";

class PostsShowComponent extends Component {
  componentDidMount() {
    const { match, viewSinglePost, initPostComment } = this.props;

    viewSinglePost(match.params.id);
    initPostComment(match.params.id);
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
            <textarea className="textarea" placeholder="Type your comment" />
            <div className="add-spacing" />
            <button className="button is-primary">Post Comment</button>
          </div>

          <div className="list-comment">
            <p className="subtitle is-5 title-comment">
              Show {comments.length} comment{comments.length > 1 ? "s" : ""}
            </p>
            {comments.map((v, keys) => <CommentGrid key={keys} {...v} />)}
          </div>
        </div>
      </main>
    );
  }
}

export default PostsShowComponent;
