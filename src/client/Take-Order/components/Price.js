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
		right: "2rem",
		width: "12rem",
		textAlign: "center"
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
		color: "#f50057"
	},
	title: {
		fontSize: "0.5rem",
		textTransform: "uppercase"
	},
	price: {
		marginBottom: "1rem"
	},
	pos: {
		fontSize: "0.6rem",
		textAlign: "left",
		lineHeight: "1.5rem"
	},
	button: {
		margin: "0 auto",
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3)
	},
	note: {
		fontSize: "0.4rem",
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
						size="small"
						variant="contained"
						color="secondary"
					>
						Find a cleaner
					</Button>
				</CardActions>
				<CardContent>
					<Typography className={classes.note} color="textSecondary">
						*Based on average task prices.
						<br />
						marketplace prices may vary.
						<br />
						Term & condition apply.
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
