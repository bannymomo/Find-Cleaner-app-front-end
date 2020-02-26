import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		position: "absolute",
		top: "2rem",
		right: "3rem",
		width: "15rem",
		textAlign: "center"
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
		marginLeft: "5px"
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

export default function SimpleCard() {
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
						$min - $max
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{bull} Get instant quotes in minutes <br />
						{bull} 1000's of reviewed cleaners <br />
						{bull} It's free to try - give it a go!
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						className={classes.button}
						size="large"
						variant="contained"
						color="secondary"
					>
						Post My Task
					</Button>
				</CardActions>
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
