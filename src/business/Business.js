import React, {Component} from "react";

import SideBar from './SideBar';
import BusinessRoutes from '../routes/BusinessRoutes'
import './style/business.scss'

class Business extends Component {
  render() {
    return (
      <div className="business__container--whole-page">
      <div className="business__sidebar--page-left">
        <SideBar />
      </div>
      <div className="business__content-container--page-right">
        <BusinessRoutes />
      </div>
    </div>
    )
  } 
};

export default Business;
