import React, { Component } from "react";
import "./style/navigation.scss";
import Button from "@material-ui/core/Button";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import pic from "../assets/images/pic.png";
import MainMenu from "./MainMenu";

import {
	LOGIN_URL,
	HOMEPAGE_URL,
	SERVICE_URL,
	SUPPORT_URL,
	BUSINESS_BASE_URL,
	CLIENT_BASE_URL
} from "../routes/URLMap";
import { getBusinessId, getClientId } from "../utils/auth";
import { isLoggedIn } from "../utils/auth";
import PostOrderBtn from "../components/order/PostOrderBtn";
import styled from "styled-components";
import { POST_ORDER_AT_HOMEPAGE } from "../utils/variables";

const StyledLogin = styled(Link)`
	display: ${props => (props.isloggedin ? "none" : "")};
`;
const StyleAvartarButton = styled(Link)`
	display: ${props =>
		props.isloggedin && (props.loginclient || props.loginbussiness)
			? ""
			: "none"};
`;

class MainNavigation extends Component {
	renderButton = (loginClient, loginBussiness) => {
		if (loginBussiness && isLoggedIn()) {
			return (
				<Button
					component={Link}
					to={`${BUSINESS_BASE_URL}/${loginBussiness}/browse-order`}
					variant="contained"
					color="primary"
				>
					All tasks
				</Button>
			);
		} else if (loginClient && isLoggedIn()) {
			return <PostOrderBtn />;
		} else {
			return (
				<Button
					component={Link}
					to={`${CLIENT_BASE_URL}/${loginClient}`}
					onClick={() => {
						localStorage.setItem(POST_ORDER_AT_HOMEPAGE, true);
					}}
					variant="contained"
					color="primary"
				>
					Post a task
				</Button>
			);
		}
	};
	renderItems = () => {
		const loginClient = getClientId();
		const loginBussiness = getBusinessId();
		return (
			<div className="nav-bar__items--container">
				<ul className="nav-bar__ul--black">
					<li>
						<Link
							to={HOMEPAGE_URL}
							className="nav-bar__link--black"
						>
							Home
						</Link>
					</li>
					<li>
						<Link to={SERVICE_URL} className="nav-bar__link--black">
							Service
						</Link>
					</li>
					<li>
						<Link to={SUPPORT_URL} className="nav-bar__link--black">
							Support
						</Link>
					</li>
					<li>
						<StyledLogin
							isloggedin={isLoggedIn() ? 1 : 0}
							to={LOGIN_URL}
							className="nav-bar__link--black"
						>
							Login
						</StyledLogin>
					</li>
				</ul>
				<div className="nav-bar__avatar--container">
					<StyleAvartarButton
						isloggedin={isLoggedIn() ? 1 : 0}
						loginclient={loginClient}
						loginbussiness={loginBussiness}
						to={
							loginClient
								? `${CLIENT_BASE_URL}/${loginClient}`
								: `${BUSINESS_BASE_URL}/${loginBussiness}`
						}
					>
						<Avatar alt="users" src={pic} />
					</StyleAvartarButton>
				</div>
				<div className="nav-bar__button--blue">
					{this.renderButton(loginClient, loginBussiness)}
				</div>
			</div>
		);
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
				{this.renderItems()}
				<MainMenu />
			</header>
		);
	}
}

export default MainNavigation;
