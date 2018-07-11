import React, { Component } from "react";
import Breadcrumb from "../../../components/Breadcrumb";

class Dashboard extends Component {
  render() {
    return (
      <main className="column content">
        <Breadcrumb lastLink={"Dashboard"} />

        <div className="columns is-multiline">
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOP SELLER TOTAL</div>
              <div className="title">100</div>
            </div>
          </div>
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOP SELLER TOTAL</div>
              <div className="title">100</div>
            </div>
          </div>
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOP SELLER TOTAL</div>
              <div className="title">100</div>
            </div>
          </div>
          <div className="column">
            <div className="box is-primary">
              <div className="heading">TOP SELLER TOTAL</div>
              <div className="title">100</div>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          <div className="column is-4">
            <nav className="panel">
              <p className="panel-heading">Users</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="Search" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </p>
              </div>
              <div className="panel-block">Andre Pratama</div>
              <div className="panel-block">Andre Pratama</div>
              <div className="panel-block">Andre Pratama</div>
            </nav>
          </div>

          <div className="column is-4">
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
              <div className="panel-block">Andre Pratama</div>
              <div className="panel-block">Andre Pratama</div>
              <div className="panel-block">Andre Pratama</div>
            </nav>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
