import React, { Component, Fragment } from "react";
import "./style/client.scss";
import SideBar from "./sidebar/SideBar";
import ClientRoutes from "../routes/ClientRoutes";
import ClientTempDrawer from "./ClientTempDrawer";
import DashboardNavigation from "../navigation/DashboardNavigation";

class Client extends Component {
	render() {
		return (
			<Fragment>
				<DashboardNavigation />
				<div className="client__container--whole-page">
					<div className="client__sidebar--page-left">
						<div>
							<SideBar />
						</div>
					</div>

					<div className="client__content-container--page-right">
						<div className="client__temporaryDrawer">
							<ClientTempDrawer />
						</div>
						<ClientRoutes />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Client;
