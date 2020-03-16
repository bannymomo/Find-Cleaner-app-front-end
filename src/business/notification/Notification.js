import React from "react";
import Button from "@material-ui/core/Button";
import { BUSINESS_BASE_URL } from "../../routes/URLMap";
import { Link } from "react-router-dom";

import "./style/notification.scss";

function Notification(props) {
	const businessId = props.match.params.clientId;
	return (
		<div className="notification__container--whole">
			<img
				className="notification__img--center"
				src="https://www.airtasker.com/images/empty_pages/notifications.png"
				alt="notification"
			/>
			This is where we'll let you know about tasks, comments and other
			stuff.
			<br /> Let's post a task or make an offer!
			<div className="notification__button-container--center">
				<Button
					variant="contained"
					color="secondary"
					component={Link}
					to={`${BUSINESS_BASE_URL}/${businessId}/browse-order`}
				>
					Browse all tasks
				</Button>
			</div>
		</div>
	);
}

export default Notification;
