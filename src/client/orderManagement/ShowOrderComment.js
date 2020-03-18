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
					{props.clientName} 's comment
				</h3>
				<div className="order-comment__rating--container">
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
