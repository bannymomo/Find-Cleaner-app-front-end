import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			marginBottom: theme.spacing(3),
			width: 250
		}
	},
	dateTime: {
		display: "inline-block",
		fontSize: 16,
		margin: theme.spacing(1, 0, 0.5, 1),
		borderRadius: 5,
		border: "1px solid #0005",
		padding: theme.spacing(1.5, 1)
	},
	moment: {
		padding: theme.spacing(1),
		fontWeight: 600
	},
	newDateTime: {
		margin: theme.spacing(1.5),
		fontSize: "12px",
		color: "#3f88de"
	}
}));

export default function BasicTextFields(props) {
	const classes = useStyles();

	return (
		<div className="take-order--textfield">
			<Grid container>
				<Grid>
					<EventAvailableOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>When do you need the cleaning?</Typography>
				</Grid>
			</Grid>
			<div className={classes.dateTime}>
				Service Time:
				<Moment className={classes.moment} format="DD-MM-YY HH:mm">
					{props.dueDate}
				</Moment>
			</div>
			<div className={classes.newDateTime}>
				<span>
					Please pick a new date & time below if you need a change of
					service time:
				</span>
			</div>
		</div>
	);
}
