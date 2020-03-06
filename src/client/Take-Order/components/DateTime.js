import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
// import { format } from "date-fns";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			marginBottom: theme.spacing(3),
			width: 250
		}
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

			<form className={classes.root} autoComplete="off">
				<TextField
					name="dueDate"
					onChange={props.handleChange}
					id="outlined-basic"
					required
					placeholder="July 1st 09:30 a.m."
					label="Enter your date & time"
					variant="outlined"
					margin="dense"
					color="secondary"
					value={props.dueDate}
				/>
			</form>
		</div>
	);
}
