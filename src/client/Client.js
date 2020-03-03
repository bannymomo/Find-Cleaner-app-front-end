import React, { Component, Fragment } from "react";
import "./style/client.scss";
import SideBar from "./Sidebar/SideBar";
import ClientRoutes from "../routes/ClientRoutes";
import TemporaryDrawer from "./TemporaryDrawer";
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
						<div className="client__burgerIcon">
							<TemporaryDrawer />
						</div>
						<ClientRoutes />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Client;
