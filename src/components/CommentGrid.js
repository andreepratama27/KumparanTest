import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment } from "@scenes/posts/actions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  deleteOneComment(data) {
    dispatch(deleteComment(data));
  }
});

class CommentGrid extends Component {
  constructor(props) {
    super(props);
  }

  _deleteComment(data) {
    this.props.deleteOneComment(data);
  }

  render() {
    return (
      <div className="box box-comment">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong>
                <small>{this.props.email}</small>
                <br />
                {this.props.body}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true" />
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true" />
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <button
            className="delete"
            onClick={() =>
              this._deleteComment({
                id: this.props.match.params.id,
                idComment: this.props.id
              })
            }
          />
        </article>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentGrid);
