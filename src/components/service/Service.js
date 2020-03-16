import React, { Component } from "react";
import MainNavigation from "../../navigation/MainNavigation";
import CategoryList from "./CategoryList";
import "./style/service.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { HOMEPAGE_URL } from "../../routes/URLMap";

class Service extends Component {
	render() {
		return (
			<React.Fragment>
				<MainNavigation />
				<div className="service__container--whole">
					<h3 className="service__header--top">Service Categories</h3>
					<span className="service__paragraph--title">
						Choose a service you need ...
					</span>
					<p className="service__paragraph--content">
						To-do list never getting shorter? Take the burden off
						and find the help you need on Broomer.
					</p>

					<CategoryList />
					<Button
						component={Link}
						to={`${HOMEPAGE_URL}`}
						className="service__button--homepage"
					>
						Back to Homepage
					</Button>
				</div>
			</React.Fragment>
		);
	}
}

export default Service;
