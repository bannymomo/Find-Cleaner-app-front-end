import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import pic from "../assets/images/pic.png";
import {
	LOGIN_URL,
	HOMEPAGE_URL,
	BUSINESS_BASE_URL,
	CLIENT_BASE_URL
} from "../routes/URLMap";
import {
	removeToken,
	removeClientId,
	removeBusinessId,
	getClientId,
	getBusinessId
} from "../utils/auth";
import { isLoggedIn } from "../utils/auth";

class MainNavigation extends Component {
	state = {
		linksActive: [true, false, false, false]
	};

	renderLink = index => {
		const links = [
			{ name: "Home", to: HOMEPAGE_URL },
			{ name: "Serivce", to: HOMEPAGE_URL },
			{ name: "Support", to: HOMEPAGE_URL },
			{ name: "Login", to: LOGIN_URL }
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
		const linksActive = Array(4).fill(false);
		linksActive[index] = true;
		this.setState({ linksActive });
	};

	handleLogOut = () => {
		removeToken();
		removeClientId();
		removeBusinessId();
	};

	render() {
		return (
			<header className="nav-bar__header--white">
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
						<li>{this.renderLink(2)}</li>
						<li style={{ display: isLoggedIn() ? "none" : " " }}>
							{this.renderLink(3)}
						</li>
					</ul>
					<div className="nav-bar__avatar--container">
						<Link
							to={
								getClientId()
									? `${CLIENT_BASE_URL}/${getClientId()}`
									: `${BUSINESS_BASE_URL}/${getBusinessId()}`
							}
							style={{
								display:
									isLoggedIn() &&
									(getClientId() || getBusinessId())
										? ""
										: "none"
							}}
						>
							<Avatar alt="users" src={pic} />
						</Link>
					</div>
					<div className="nav-bar__button--blue">
						<Button
							variant="contained"
							style={{
								backgroundColor: "#3f88de",
								color: "white"
							}}
						>
							Post your task
						</Button>
					</div>
				</div>
			</header>
		);
	}
}

export default MainNavigation;
