import React, { Component } from "react";
import "./style/client.scss";
import SideBar from "./SideBar";
import ClientRoutes from '../routes/ClientRoutes'
class Client extends Component {
  render() {
    return (
      <div className="client__container--whole-page">
        <div className="client__sidebar--page-left">
          <SideBar />
        </div>
        <div className="client__content-container--page-right">
          <ClientRoutes />
        </div>
      </div>
    );
  }
}

export default Client;
