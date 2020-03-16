import React from "react";

import "./style/message.scss";

function Message() {
	return (
		<div className="message__container--whole">
			<img
				className="message__img--center"
				src="https://www.airtasker.com/images/empty_pages/messages.png"
				alt="message"
			/>
			You haven't got any messages yet - assign a task or get assigned to
			chat privately!
		</div>
	);
}

export default Message;
