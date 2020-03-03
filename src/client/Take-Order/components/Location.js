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
					<LocationOnOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>Where do you need the cleaning?</Typography>
				</Grid>
			</Grid>

			<form className={classes.root} autoComplete="off">
				<TextField
					name="location"
					onChange={props.handleChange}
					id="outlined-basic"
					required
					placeholder="Ann st Brisbane City QLD"
					label="Enter your location"
					variant="outlined"
					margin="dense"
					color="secondary"
				/>
			</form>
		</div>
	);
}
