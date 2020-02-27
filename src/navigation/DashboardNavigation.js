import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { HOMEPAGE_URL } from "../routes/URLMap";

class DashboardNavigation extends Component {
	render() {
		return (
			<header
				className="nav-bar__header--white"
				style={{
					boxShadow: `${4}px ${4}px ${24}px rgba(0, 0, 0, 0.25)`
				}}
			>
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
								Notifications
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

export default DashboardNavigation;
