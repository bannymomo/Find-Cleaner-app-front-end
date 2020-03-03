import React, { Component } from "react";
import ListArray from "./components/ListArray";
import "./style/dashboard.scss";
import Chart from "./components/Chart";

class ClientDashboard extends Component {
	render() {
		return (
			<div className="dashboard__container--whole">
				<h3 className="dashboard__header--top">Dashboard</h3>
				<div>
					<span className="dashboard__paragraph--title">
						Get it done today
					</span>
					<p className="dashboard__paragraph--content">
						To-do list never getting shorter? Take the burden off
						and find the help you need on Broomer.
					</p>
				</div>
				<Chart />
				<ListArray />
			</div>
		);
	}
}

export default ClientDashboard;
