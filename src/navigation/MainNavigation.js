import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
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
	handleLogOut = () => {
		removeToken();
		removeClientId();
		removeBusinessId();
	};

	scrollToAnchor = anchorName => {
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName);
			if (anchorElement) {
				anchorElement.scrollIntoView({
					block: "start",
					behavior: "smooth"
				});
			}
		}
	};

	render() {
		return (
			<header className="nav-bar__header--white">
				<div>
					<img className="nav-bar__logo--pic" src={logo} alt="logo" />
					<img
						className="nav-bar__logo--font"
						src={brandname}
						alt="brandname"
					/>
				</div>
				<div className="nav-bar__items--container">
					<ul className="nav-bar__ul--black">
						<li>
							<Link
								className="nav-bar__link--black"
								to={HOMEPAGE_URL}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="nav-bar__link--black"
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
								Dashboard
							</Link>
						</li>

						<li>
							<Link
								to={{ HOMEPAGE_URL }}
								className="nav-bar__link--black"
								onClick={() => this.scrollToAnchor("service")}
							>
								Service
							</Link>
						</li>
						<li>
							<Link
								style={{ display: isLoggedIn() ? "none" : " " }}
								className="nav-bar__link--black"
								to={LOGIN_URL}
							>
								Log in
							</Link>
						</li>
						<li>
							<Link
								style={{ display: isLoggedIn() ? " " : "none" }}
								className="nav-bar__link--black"
								to={HOMEPAGE_URL}
								onClick={this.handleLogOut}
							>
								Log Out
							</Link>
						</li>
						<li>
							<Link
								className="nav-bar__link--black"
								to={HOMEPAGE_URL}
							>
								Support
							</Link>
						</li>
					</ul>
					<div className="nav-bar__button--blue">
						<Button variant="contained" color="primary">
							Post your task
						</Button>
					</div>
				</div>
			</header>
		);
	}
}

export default MainNavigation;
