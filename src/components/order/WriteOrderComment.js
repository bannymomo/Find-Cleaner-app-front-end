import React, { Fragment } from "react";
import Modal from "react-animated-modal";
import Rating from "@material-ui/lab/Rating";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router";
import { addOrderComment } from "../../api/order";
import ErrorMessage from "../../UI/ErrorMessage";

const labels = {
	1: "Useless+",
	2: "Poor+",
	3: "Ok+",
	4: "Good+",
	5: "Excellent+"
};

class WriteOrderComment extends React.Component {
	state = {
		value: 2,
		hover: -1,
		commentContent: "",
		isLoading: false,
		submitSuccess: false,
		error: null
	};

	changeContent = event => {
		this.setState({ commentContent: event.target.value });
	};

	handleSubmit = () => {
		if (!this.state.commentContent) {
			this.setState({ commentContent: "Good!" });
		}
		const orderComment = {
			comment: {
				rate: this.state.value,
				comment: this.state.commentContent
			}
		};
		const orderId = this.props.match.params.orderId;
		this.setState({ isLoading: true }, () => {
			addOrderComment(orderId, orderComment)
				.then(() => {
					this.setState({ submitSuccess: true, isLoading: false });
					this.props.changeSubmitStatus(
						this.state.commentContent,
						this.state.value
					);
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	renderModal = () => {
		if (this.state.isLoading) {
			return (
				<div className="modal-orders__progress--container">
					<CircularProgress size={150} color="secondary" />
				</div>
			);
		}
		if (this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		}
		if (this.state.submitSuccess) {
			return (
				<div className="modal-submit__success--container">
					<i className="fas fa-check-circle"></i>
					<p>Comment submitted successfully</p>
				</div>
			);
		}
		return (
			<Fragment>
				<h3 className="order-comment__modal--title">Add Comment</h3>
				<div className="order-comment__rating--container">
					<Rating
						name="hover-feedback"
						value={this.state.value}
						onChange={(event, newValue) => {
							this.setState({ value: newValue });
						}}
						onChangeActive={(event, newHover) => {
							this.setState({ hover: newHover });
						}}
					/>
					{this.state.value !== null && (
						<Box ml={2}>
							{
								labels[
									this.state.hover !== -1
										? this.state.hover
										: this.state.value
								]
							}
						</Box>
					)}
				</div>
				<textarea
					className="order-comment__modal--input"
					onChange={this.changeContent}
					value={this.state.commentContent}
				/>
				<div className="order-comment__button--container">
					<Button
						onClick={this.handleSubmit}
						color={"primary"}
						variant="contained"
					>
						SUBMIT
					</Button>
				</div>
			</Fragment>
		);
	};

	render() {
		return (
			<div className="order-comment__modal--container">
				<Modal
					visible={this.props.writeCommentModal}
					closemodal={this.props.closeCommentModal}
					type="flipInY"
				>
					{this.renderModal()}
				</Modal>
			</div>
		);
	}
}

export default withRouter(WriteOrderComment);
