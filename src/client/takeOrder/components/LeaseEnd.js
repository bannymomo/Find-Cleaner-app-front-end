import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			marginLeft: theme.spacing(1),
			width: theme.spacing(29),
			height: theme.spacing(6.5)
		}
	}
}));

export default function CheckboxLabels(props) {
	const classes = useStyles();

	return (
		<div className="take-order--checkbox">
			<div className={classes.root}>
				<Paper elevation={0}>
					<FormControlLabel
						control={
							<Checkbox
								checked={props.endOfLease}
								name="endOfLease"
								value={props.endOfLease}
								onChange={props.handleChange}
							/>
						}
						label="This is an end-of-lease clean"
					/>
				</Paper>
			</div>
		</div>
	);
}
