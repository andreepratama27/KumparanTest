import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const Wrapper = ({ children }) => (
  <Fragment>
    <div className="wrapper">
      <div className="columns">
        <aside className="column is-2 sidemenu">
          <nav className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <Link to="/" className="link">
                  <div className="icon-no-margin">
                    <i className="fa fa-tachometer-alt" />
                  </div>
                  Dashboard
                </Link>
              </li>
            </ul>
            <p className="menu-label">Administrator</p>
            <ul className="menu-list">
              <li>
                <Link to="/users" className="link">
                  <div className="icon-no-margin">
                    <i className="fa fa-users" />
                  </div>
                  Users
                </Link>
              </li>
              <li>
                <Link to="/posts" className="link">
                  <div className="icon-no-margin">
                    <i className="fa fa-clipboard" />
                  </div>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/albums" className="link">
                  <div className="icon-no-margin">
                    <span className="fa fa-image" />
                  </div>
                  Albums
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="column is-10 remove-padding">
          <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item">Kumparan</a>

              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
          </nav>
          {children}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Wrapper;
