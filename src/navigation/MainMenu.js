import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import {
	LOGIN_URL,
	HOMEPAGE_URL,
	SERVICE_URL,
	SUPPORT_URL
} from "../routes/URLMap";

const menuItems = [
	{ name: "Home", link: `${HOMEPAGE_URL}` },
	{ name: "Service", link: `${SERVICE_URL}` },
	{ name: "Support", link: `${SUPPORT_URL}` }
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const StyledLogin = styled(Link)`
		display: ${isLoggedIn() ? "none" : ""};
		color: #fff;
		text-decoration: none;
	`;

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="nav-bar__menu--container ">
			<IconButton
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				className="nav-bar__menu-list"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 5,
						width: 100,
						backgroundColor: "#0006",
						color: "#fff"
					}
				}}
			>
				{menuItems.map(menuItem => (
					<MenuItem
						key={menuItem.name}
						selected={menuItem.name === "Home"}
						onClick={handleClose}
						to={menuItem.link}
						component={Link}
					>
						{menuItem.name}
					</MenuItem>
				))}
				<MenuItem onClick={handleClose}>
					<StyledLogin className="styled-login" to={LOGIN_URL}>
						Login
					</StyledLogin>
				</MenuItem>
			</Menu>
		</div>
	);
}
