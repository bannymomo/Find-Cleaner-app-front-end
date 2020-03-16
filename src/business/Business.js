import React, { Component, Fragment } from "react";

import SideBar from "./SideBar/SideBar";
import BusinessRoutes from "../routes/BusinessRoutes";
import "./style/business.scss";
import DashboardNavigation from "../navigation/DashboardNavigation";
import BusinessTempDrawer from "./BusinessTempDrawer";

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
						<div className="business__temporaryDrawer">
							<BusinessTempDrawer />
						</div>
						<BusinessRoutes />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Business;
