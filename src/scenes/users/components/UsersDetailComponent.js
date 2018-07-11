import React, { Component } from "react";
import BannerImage from "@components/BannerImage";

class UsersDetailComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
      getOneUser
    } = this.props;

    getOneUser(parseInt(params.id));
  }

  render() {
    const { user } = this.props;

    console.log(user);

    return (
      <div className="column header-big">
        <div className="columns">
          <div className="column is-12 column-header">
            <div className="columns">
              <div className="column is-3 image-place">
                <BannerImage name={user.name} />
              </div>
              <div className="column is-6 description-place">
                <div className="user-name">{user.name}</div>
                <div className="columns columns-desc">
                  <div className="column">{user.email}</div>
                  <div className="column">{user.phone}</div>
                  <div className="column">{user.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column-tabs">
            <div className="tabs">
              <ul>
                <li className="is-active">
                  <a>Description</a>
                </li>
                <li className="">
                  <a>Posts</a>
                </li>
                <li className="">
                  <a>Albums</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content content-profile">
          <h2>Anda</h2>
        </div>
      </div>
    );
  }
}

export default UsersDetailComponent;
