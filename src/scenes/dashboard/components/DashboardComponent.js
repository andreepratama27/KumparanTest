import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "@components/Breadcrumb";

class DashboardComponent extends Component {
  _triggerSearch(e) {
    this.props.search(e.target.value);
  }

  render() {
    const { dashboard } = this.props;

    return (
      <main className="column content">
        <Breadcrumb lastLink={"Dashboard"} />

        <div className="columns is-multiline">
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOTAL USER REGISTERED</div>
              <div className="title">{dashboard && dashboard.users.length}</div>
            </div>
          </div>
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOTAL POSTS SUBMITED</div>
              <div className="title">{dashboard && dashboard.posts.length}</div>
            </div>
          </div>
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOTAL ALBUM</div>
              <div className="title">
                {dashboard && dashboard.albums.length}
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          <div className="column is-4">
            <nav className="panel">
              <p className="panel-heading">Users</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    onChange={e => this._triggerSearch(e)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </p>
              </div>
              <div className="panel-block--list">
                {dashboard &&
                  dashboard.users.map((v, keys) => (
                    <div className="panel-block panel-block--divide" key={keys}>
                      {v.name}

                      <div className="panel-block--divide_right">
                        <Link to={"/user/" + v.id}>View</Link>
                      </div>
                    </div>
                  ))}
              </div>
            </nav>
          </div>

          <div className="column is-6">
            <nav className="panel">
              <p className="panel-heading">Posts</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="Search" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </p>
              </div>
              <div className="panel-block--list">
                {dashboard &&
                  dashboard.posts.map((v, keys) => (
                    <div className="panel-block" key={keys}>
                      {v.title.substr(0, 30)}
                    </div>
                  ))}
              </div>
            </nav>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardComponent;
