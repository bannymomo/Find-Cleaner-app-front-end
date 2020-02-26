import React, { Component } from "react";
import "./style/client.scss";
import SideBar from "./SideBar";
import ClientRoutes from '../routes/ClientRoutes';
import TemporaryDrawer from './TemporaryDrawer';


class Client extends Component {

  render() {

    return (

      <div className="client__container--whole-page" >

        <div className="client__sidebar--page-left">
              <div >
                <SideBar />
              </div>
        </div>

        <div className="client__content-container--page-right">
          <div className="client__burgerIcon">
            {/* <MenuRoundedIcon fontSize="large" onClick=""/> */}
            <TemporaryDrawer/>
          </div>
          <ClientRoutes />
        </div>
      </div>
    );
  }
}

export default Client;
