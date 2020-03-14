import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import {
	HOMEPAGE_URL,
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL
} from "../routes/URLMap";

import { withRouter } from "react-router";
import PostOrderBtn from "../components/order/PostOrderBtn";

class DashboardNavigation extends Component {
	renderItems = (clientId, businessId) => {
		return (
			<div className="nav-bar__items--container">
				<ul className="nav-bar__ul--black">
					<li>
						<Link
							to={
								clientId
									? `${CLIENT_BASE_URL}/${clientId}/notification`
									: `${BUSINESS_BASE_URL}/${businessId}/notification`
							}
							className="nav-bar__link--black"
						>
							Notification
						</Link>
					</li>
					<li>
						<Link
							to={
								clientId
									? `${CLIENT_BASE_URL}/${clientId}/message`
									: `${BUSINESS_BASE_URL}/${businessId}/message`
							}
							className="nav-bar__link--black"
						>
							Message
						</Link>
					</li>
				</ul>
				<div className="nav-bar__button--blue">
					{businessId ? (
						<Button
							component={Link}
							to={`${BUSINESS_BASE_URL}/${businessId}/browse-order`}
							variant="contained"
							color="primary"
						>
							Browse all tasks
						</Button>
					) : (
						<PostOrderBtn buttonInNav={true} />
					)}
				</div>
			</div>
		);
	};
	render() {
		const businessId = this.props.match.params.businessId;
		const clientId = this.props.match.params.clientId;
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
				<div className="nav-bar__icons--container">
					<ul className="nav-bar__icons">
						<li>
							<Link
								to={
									clientId
										? `${CLIENT_BASE_URL}/${clientId}/notification`
										: `${BUSINESS_BASE_URL}/${businessId}/notification`
								}
							>
								<NotificationsOutlinedIcon />
							</Link>
						</li>
						<li>
							<Link
								to={
									clientId
										? `${CLIENT_BASE_URL}/${clientId}/message`
										: `${BUSINESS_BASE_URL}/${businessId}/message`
								}
							>
								<MessageOutlinedIcon />
							</Link>
						</li>
					</ul>
				</div>

				{this.renderItems(clientId, businessId)}
			</header>
		);
	}
}

export default withRouter(DashboardNavigation);
