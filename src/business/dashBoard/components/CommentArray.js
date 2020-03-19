import React from "react";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { fetchHisOrders } from "../../../api/business";
import { withRouter } from "react-router";
import { DONE } from "../../../utils/variables";
import { Link } from "react-router-dom";
import { BUSINESS_BASE_URL, ORDER_BASE_URL } from "../../../routes/URLMap";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorMessage from "../../../UI/ErrorMessage";

const styles = theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	}
});

class CommentArray extends React.Component {
	state = {
		isLoading: false,
		commentArray: []
	};

	componentDidMount() {
		const businessId = this.props.match.params.businessId;
		const commentArray = [...this.state.commentArray];
		this.setState(
			{
				isLoading: true
			},
			() => {
				fetchHisOrders(businessId, 1, 10, DONE)
					.then(res => {
						res.orders.map(order => {
							const comment = {
								clientName: order.client.fullname,
								avatar: order.client.photo,
								rate: order.rate,
								comment: order.comment,
								alt: order.client.fullname,
								orderId: order._id
							};
							commentArray.push(comment);
							return commentArray;
						});
						this.setState({ isLoading: false, commentArray });
					})
					.catch(error => {
						this.setState({ error, isLoading: false });
					});
			}
		);
	}

	renderComment = () => {
		const { classes } = this.props;
		const businessId = this.props.match.params.businessId;
		if (this.state.isLoading) {
			return (
				<div className="comment__progress--container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		}
		if (this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		}
		if (this.state.commentArray.length === 0) {
			return <p>You have no comment yet</p>;
		}
		return this.state.commentArray.map((comment, index) => {
			return (
				<div className="single-comment__whole--container" key={index}>
					<span className="comment__avarta--container">
						<Avatar
							alt={comment.alt}
							src={comment.avatar}
							className={classes.large}
						/>
					</span>
					<div className="comment__rating--container">
						<strong>{comment.clientName} </strong>
						<br />
						<Rating
							name="disabled"
							value={comment.rate}
							readOnly
							size="small"
						/>
						<br />
						{comment.rate * 20}% Completion Rate
					</div>
					<span className="comment__orderId--container">
						<Link
							className="comment__orderId--link"
							to={`${BUSINESS_BASE_URL}/${businessId}${ORDER_BASE_URL}/${comment.orderId}`}
						>
							OrderID: {comment.orderId}
						</Link>
					</span>
					<div className="comment__content--container">
						{comment.comment}
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="comment__whole--container">
				<div className="dashboard__paragraph--title">
					Latest user comments
				</div>
				{this.renderComment()}
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(CommentArray));
