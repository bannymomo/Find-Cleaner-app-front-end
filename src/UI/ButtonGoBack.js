import React from "react";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

export default function ButtonGoBack(props) {
	/*
    // copy the fn below to the parent comp to make it work
	handleGoBack = () => {
	    this.props.history.go(-1);
    };
    */

	const useStyles = makeStyles(theme => ({
		buttonGoBack: {
			marginBottom: "1.2rem",
			marginTop: "1.5rem",
			marginLeft: "6rem",
			fontSize: "0.7rem",
			textTransform: "uppercase",
			padding: 0,
			borderRadius: 0,
			border: "none",
			borderBottom: "1px solid",

			"&:hover": {
				color: "#3f88de",
				backgroundColor: "transparent"
			},
			"&:focus": {
				outline: "none"
			}
		}
	}));
	const classes = useStyles();

	return (
		<button
			component={Link}
			onClick={props.handleGoBack}
			className={classes.buttonGoBack}
		>
			⇦ Back to my orders
		</button>
	);
}
