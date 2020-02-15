import React, { Fragment, Component } from "react";
import ListArray from "./components/ListArray";
import "./style/dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="dashboard__header--top">Dashboard</h3>
        <div>
          <span className="dashboard__paragraph--title">Get it done today</span>
          <p className="dashboard__paragraph--content">
            To-do list never getting shorter? Take the burden off and find the
            help you need on Airtasker.
          </p>
        </div>
        <ListArray />
        <button className="dashboard__post-button--pink">Post a task</button>
      </Fragment>
    );
  }
}

export default Dashboard;
