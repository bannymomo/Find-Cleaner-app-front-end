import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
	root: {
		position: "absolute",
		top: "3rem",
		right: "4rem",
		width: "15rem",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			position: "relative",
			marginLeft: 75,
			marginBottom: 50,
			width: "17rem"
		}
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
		color: "#2196f3"
	},
	title: {
		fontSize: "0.8rem",
		textTransform: "uppercase"
	},
	price: {
		marginBottom: "1rem",
		fontSize: "2rem"
	},
	pos: {
		fontSize: "0.8rem",
		textAlign: "left",
		lineHeight: "1.5rem",
		marginLeft: "5px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			textAlign: "center"
		}
	},
	button: {
		margin: "0 auto",
		fontSize: "1.1rem",
		letterSpacing: "1px",
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3)
	},
	note: {
		fontSize: "0.6rem",
		fontWeight: 100
	}
}));

export default function SimpleCard(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>✔</span>;

	return (
		<div className="take-order--card">
			<Card className={classes.root}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Estimate price*
					</Typography>
					<Typography
						className={classes.price}
						variant="h5"
						component="h2"
					>
						{props.price}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{bull} Get instant quotes in minutes <br />
						{bull} 1000's of reviewed cleaners <br />
						{bull} It's free to try - give it a go!
					</Typography>
				</CardContent>
				{props.isCreating ? (
					<CircularProgress size={50} color="secondary" />
				) : (
					<Button
						className={classes.button}
						size="large"
						variant="contained"
						color="primary"
						onClick={props.handleSubmit}
					>
						Post My Task
					</Button>
				)}
				<CardContent>
					<Typography className={classes.note} color="textSecondary">
						*Based on average task prices.
						<br />
						marketplace prices may vary.
						<br />
						Terms & conditions apply.
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
