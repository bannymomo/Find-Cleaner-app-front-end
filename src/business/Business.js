import React, { Component, Fragment } from "react";

import SideBar from "./sideBar/SideBar";
import BusinessRoutes from "../routes/BusinessRoutes";
import "./style/business.scss";
import DashboardNavigation from "../navigation/DashboardNavigation";

class Business extends Component {
	render() {
		return (
			<Fragment>
				<DashboardNavigation />
				<div className="business__container--whole-page">
					<div className="business__sidebar--page-left">
						<SideBar />
					</div>
					<div className="business__content-container--page-right">
						<BusinessRoutes />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Business;
