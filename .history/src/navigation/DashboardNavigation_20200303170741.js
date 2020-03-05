import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
	HOMEPAGE_URL,
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL
} from "../routes/URLMap";

import { withRouter } from "react-router";

class DashboardNavigation extends Component {
	state = {
		linksActive: Array(2).fill(false),
	};

	renderLink = index => {
		const businessId = this.props.match.params.businessId;
		const clientId = this.props.match.params.clientId;
		const links = [
			{
				name: "Notification",
				to: clientId
					? `${CLIENT_BASE_URL}/${clientId}/notification`
					: `${BUSINESS_BASE_URL}/${businessId}/notification`
			},
			{
				name: "Message",
				to: clientId
					? `${CLIENT_BASE_URL}/${clientId}/message`
					: `${BUSINESS_BASE_URL}/${businessId}/message`
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
		const businessId = this.props.match.params.businessId;
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
							{businessId ? `Browse your task` : `Post your task`}
						</Button>
					</div>
				</div>
				<div >
					<ListRoundedIcon fontSize="large" className="nav__menuIcon" />
				</div>
			</header>
		);
	}
}

export default withRouter(DashboardNavigation);
