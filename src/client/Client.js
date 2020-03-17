import React, { Component, Fragment } from "react";
import "./style/client.scss";
import SideBar from "./sideBar/SideBar";
import ClientRoutes from "../routes/ClientRoutes";
import ClientTempDrawer from "./ClientTempDrawer";
import DashboardNavigation from "../navigation/DashboardNavigation";

class Client extends Component {
	render() {
		return (
			<Fragment>
				<div className="client__whole-page">
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
				</div>
			</Fragment>
		);
	}
}

export default Client;
