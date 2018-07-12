import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BannerImage from "@components/BannerImage";

const UsersDetailWrapper = ({ children, user }) => {
  return (
    <Fragment>
      {user ? (
        <div>
          <div className="column header-big">
            <div className="columns">
              <div className="column is-12 column-header">
                <div className="columns">
                  <div className="column is-2 image-place">
                    <BannerImage name={user.name} />
                  </div>
                  <div className="column is-8 description-place">
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
                    <li className="">
                      <Link to={`/user/${user.id}`}>Posts</Link>
                    </li>
                    <li className="">
                      <Link to={`/user/${user.id}/albums`}>Albums</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content content-profile">{children}</div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default UsersDetailWrapper;
