import React, { Component } from "react";
import SearchBar from "./components/Search";
import DatePosted from "./components/DatePosted";
import NewTasks from "./components/NewTasks";
import "./style/browseorders.scss";
import { Divider } from "@material-ui/core";

class BrowseOrder extends Component {
	render() {
		return (
			<div>
				<div className="browse-orders--top-bar">
					<DatePosted />
					<NewTasks />
					<SearchBar />
				</div>
				<Divider />
			</div>
		);
	}
}

export default BrowseOrder;
