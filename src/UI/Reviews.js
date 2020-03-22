import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "baseline"
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start"
	},

	avatar: {
		backgroundColor: "#E5E5E5",
		width: "2.5rem",
		height: "2.5rem"
	},
	rating: {
		display: "flex",
		alignItems: "center",
		marginLeft: theme.spacing(-0.3)
	},
	date: {
		color: "#0005",
		fontSize: "10px",
		fontWeight: "400"
	},
	service: {
		fontSize: "12px",
		color: "#3f89decc",
		marginTop: theme.spacing(0.3)
	},
	comment: {
		fontSize: "13px",
		color: "#0007",
		marginTop: theme.spacing(0.3),
		"&>span": {
			color: "#3f89decc",
			fontWeight: "600"
		}
	}
}));

// export default function BusinessProfileSidebar(props) {
export default function Reviews(props) {
	const classes = useStyles();
	const defaultRating = parseInt(props.rating);
	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar} alt={props.name} src={props.clientPhoto} />
			<List>
				<ListItem className={classes.card}>
					<div className={classes.rating}>
						<Rating
							name="half-rating-read"
							defaultValue={defaultRating}
							precision={0.5}
							size="small"
							readOnly
						/>
					</div>
					<span className={classes.date}>{props.date}</span>
					<span className={classes.service}>{props.service}</span>
					<div className={classes.comment}>
						<span>{props.name} said: </span>"{props.comment}"
					</div>
				</ListItem>
			</List>
		</div>
	);
}
