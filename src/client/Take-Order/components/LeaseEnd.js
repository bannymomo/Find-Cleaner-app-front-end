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

export default function CheckboxLabels() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		leaseEndClean: false
	});

	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	return (
		<div className="take-order--checkbox">
			<div className={classes.root}>
				<Paper elevation={0}>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.leaseEndClean}
								onChange={handleChange("leaseEndClean")}
								value="lease-end-clean"
							/>
						}
						label="This is an end-of-lease clean"
					/>
				</Paper>
			</div>
		</div>
	);
}
