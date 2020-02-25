import React, { Component } from "react";
import "./style/navigation.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import brandname from "../assets/images/brandname.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { LOGIN_URL, HOMEPAGE_URL } from "../routes/URLMap";
import { removeToken } from "../utils/auth";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));

class Navigation extends Component {
	handleLogOut = () => {
		removeToken();
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
		const { classes } = this.props;
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
								to={{ HOMEPAGE_URL }}
								className="nav-bar__link--black"
								onClick={() => this.scrollToAnchor("service")}
							>
								Service
							</Link>
						</li>
						<li>
							<Link
								className="nav-bar__link--black"
								to={LOGIN_URL}
							>
								Log in
							</Link>
						</li>
						<li>
							<Link
								className="nav-bar__link--black"
								to={HOMEPAGE_URL}
								onClick={this.handleLogOut}
							>
								Log Out
							</Link>
						</li>
					</ul>
					<div className="nav-bar__button--blue">
						<div className={classes.root}>
							<Button variant="contained" color="primary">
								Post your task
							</Button>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default withStyles(useStyles)(Navigation);
