import React, { Component } from "react";
import "./style/dashboard.scss";
import Chart from "./components/Chart";
import CommentArry from "./components/CommentArray";

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard__container--whole">
				<h3 className="dashboard__header--top">Dashboard</h3>
				<div>
					<span className="dashboard__paragraph--title">
						Get it done today
					</span>
					<p className="dashboard__paragraph--content">
						Massive work is waiting for you, go and see the task
						list
					</p>
				</div>
				<Chart />
				<CommentArry />
			</div>
		);
	}
}

export default Dashboard;
