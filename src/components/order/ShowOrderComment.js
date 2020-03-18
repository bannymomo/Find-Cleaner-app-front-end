import React from "react";
import Modal from "react-animated-modal";
import Rating from "@material-ui/lab/Rating";

function ShowOrderComment(props) {
	return (
		<div className="order-comment__modal--container">
			<Modal
				visible={props.showCommentModal}
				closemodal={props.closeCommentModal}
				type="flipInY"
			>
				<h3 className="order-comment__modal--title">
					From {props.clientName}
				</h3>
				<p className="order-comment__modal--information">
					Client:{props.clientName}
				</p>
				<p className="order-comment__modal--information">
					Business:{props.businessName}
				</p>
				<p className="order-comment__modal--information">
					OrderId:{props.orderId}
				</p>
				<div className="order-comment__rating--container">
					RATING:
					<Rating name="hover-feedback" value={props.rate} readOnly />
				</div>
				<div className="order-comment__modal--input">
					{props.comment}
				</div>
			</Modal>
		</div>
	);
}

export default ShowOrderComment;
