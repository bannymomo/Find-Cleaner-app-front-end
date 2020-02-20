import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			marginBottom: theme.spacing(3),
			width: 200
		}
	}
}));

export default function BasicTextFields() {
	const classes = useStyles();

	return (
		<div className="take-order--textfield">
			<Grid container>
				<Grid>
					<LocationOnOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>Where do you need the cleaning?</Typography>
				</Grid>
			</Grid>
			<form className={classes.root} autoComplete="off">
				<TextField
					id="outlined-basic"
					required
					placeholder="4000"
					label="Enter a suburb"
					variant="outlined"
					color="secondary"
					margin="dense"
				/>
			</form>
		</div>
	);
}
