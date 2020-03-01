import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import {
	HOMEPAGE_URL,
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL
} from "../routes/URLMap";
import { getClientId, getBusinessId } from "../utils/auth";

class DashboardNavigation extends Component {
	state = {
		linksActive: Array(2).fill(false)
	};

	renderLink = index => {
		const links = [
			{
				name: "Notification",
				to: getClientId()
					? `${CLIENT_BASE_URL}/${getClientId()}/notification`
					: `${BUSINESS_BASE_URL}/${getBusinessId()}/notification`
			},
			{
				name: "Message",
				to: getClientId()
					? `${CLIENT_BASE_URL}/${getClientId()}/message`
					: `${BUSINESS_BASE_URL}/${getBusinessId()}/message`
			}
		];
		return (
			<Link
				to={links[index].to}
				style={{
					color: this.state.linksActive[index] ? "#3f88de" : ""
				}}
				onClick={() => this.handleClick(index)}
				className="nav-bar__link--black"
			>
				{links[index].name}
			</Link>
		);
	};

	handleClick = index => {
		const linksActive = Array(3).fill(false);
		linksActive[index] = true;
		this.setState({ linksActive });
	};
	render() {
		return (
			<header
				className="nav-bar__header--white"
				style={{
					boxShadow: `${4}px ${4}px ${24}px rgba(0, 0, 0, 0.25)`
				}}
			>
				<div>
					<Link to={HOMEPAGE_URL}>
						<img
							className="nav-bar__logo--pic"
							src={logo}
							alt="logo"
						/>
						<img
							className="nav-bar__logo--font"
							src={brandname}
							alt="brandname"
						/>
					</Link>
				</div>
				<div className="nav-bar__items--container">
					<ul className="nav-bar__ul--black">
						<li>{this.renderLink(0)}</li>
						<li>{this.renderLink(1)}</li>
					</ul>

					<div className="nav-bar__button--blue">
						<Button
							variant="contained"
							style={{
								backgroundColor: "#3f88de",
								color: "white"
							}}
						>
							{getBusinessId()
								? `Browse your task`
								: `Post your task`}
						</Button>
					</div>
				</div>
			</header>
		);
	}
}

export default DashboardNavigation;