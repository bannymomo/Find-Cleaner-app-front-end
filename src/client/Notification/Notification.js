import React from "react";
import Button from "@material-ui/core/Button";
import "./style/notification.scss";

function Notification() {
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
					style={{
						backgroundColor: "#3f88de",
						color: "white"
					}}
				>
					{" "}
					Post your task
				</Button>
				<Button
					variant="contained"
					style={{
						backgroundColor: "transparent",
						color: "#3f88de"
					}}
				>
					Browse your task
				</Button>
			</div>
		</div>
	);
}

export default Notification;
