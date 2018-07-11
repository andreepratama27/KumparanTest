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
                <Link to="/">Dashboard</Link>
              </li>
            </ul>
            <p className="menu-label">Administrator</p>
            <ul className="menu-list">
              <li>
                <Link to="/users">Users</Link>
                <ul>
                  <li>
                    <a>Manage Users</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
                <ul>
                  <li>
                    <a>Manage Posts</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
                <ul>
                  <li>
                    <a>Manage Albums</a>
                  </li>
                </ul>
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
