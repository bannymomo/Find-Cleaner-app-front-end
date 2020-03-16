import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			marginBottom: theme.spacing(3),
			width: 400,
			[theme.breakpoints.down("xs")]: {
				width: 270,
				marginBottom: theme.spacing(0)
			}
		}
	}
}));

export default function BasicTextFields(props) {
	const classes = useStyles();

	return (
		<div className="take-order--textfield">
			<Grid container>
				<Grid>
					<DescriptionOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>Tell us more about your needs...</Typography>
				</Grid>
			</Grid>

			<form className={classes.root} autoComplete="off">
				<TextField
					name="description"
					onChange={props.handleChange}
					placeholder="I need ... "
					label="Describe your task here ..."
					multiline
					rows="3"
					variant="outlined"
					margin="dense"
					color="secondary"
					value={props.description}
				/>
			</form>
		</div>
	);
}
