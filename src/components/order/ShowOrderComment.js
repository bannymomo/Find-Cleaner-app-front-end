import React from "react";
import Modal from "react-animated-modal";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import orderPic from "../../assets/images/order.png";

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
				<div className="order-comment__avatar-title--container">
					<Avatar
						className="order-comment__avatar--pic"
						alt="client-pic"
						src={props.clientPhoto}
						size="small"
					/>
					<p className="order-comment__modal--information">
						Client: {props.clientName}
					</p>
				</div>
				<div className="order-comment__avatar-title--container">
					<Avatar
						className="order-comment__avatar--pic"
						alt="business-pic"
						src={
							props.business
								? props.business.photo
								: "https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg"
						}
						size="small"
					/>
					<p className="order-comment__modal--information">
						Business:{" "}
						{props.business ? props.business.businessName : ""}
					</p>
				</div>
				<div className="order-comment__avatar-title--container">
					<Avatar
						className="order-comment__avatar--pic"
						alt="order-pic"
						src={orderPic}
						size="small"
					/>
					<p className="order-comment__modal--information">
						OrderId:
						<br />
						{props.orderId}
					</p>
				</div>
				<div className="order-comment__rating--container">
					RATING: &nbsp;&nbsp;
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
