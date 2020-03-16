import React, { Component } from "react";
import MainNavigation from "../../navigation/MainNavigation";
import SupportList from "./SupportList";
import "./style/support.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { HOMEPAGE_URL } from "../../routes/URLMap";

class Support extends Component {
	render() {
		return (
			<React.Fragment>
				<MainNavigation />
				<div className="support__container--whole">
					<h3 className="support__header--top">How can we help?</h3>
					<div>
						<span className="support__paragraph--title">
							Choose a support tag you need ...
						</span>
					</div>

					<Button
						component={Link}
						to={`${HOMEPAGE_URL}`}
						className="support__button--homepage"
					>
						No need for now
					</Button>
					<SupportList />
				</div>
			</React.Fragment>
		);
	}
}

export default Support;
