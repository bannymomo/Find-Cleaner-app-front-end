import React from "react";
import Button from "@material-ui/core/Button";
import "./style/notification.scss";
import PostOrderBtn from "../../components/order/PostOrderBtn";
import { Link } from "react-router-dom";
import { CLIENT_BASE_URL } from "../../routes/URLMap";

function Notification(props) {
	const clientId = props.match.params.clientId;
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
				<PostOrderBtn buttonInNav={false} />
				<Button
					variant="contained"
					color="secondary"
					component={Link}
					to={`${CLIENT_BASE_URL}/${clientId}/order-history`}
				>
					Browse your task
				</Button>
			</div>
		</div>
	);
}

export default Notification;
