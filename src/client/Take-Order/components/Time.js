import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			marginLeft: theme.spacing(1.2)
		}
	}
}));

function BasicDateTimePicker() {
	const [selectedDate, handleDateChange] = useState(new Date());
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<DateTimePicker
					label="DateTimePicker"
					inputVariant="outlined"
					value={selectedDate}
					onChange={handleDateChange}
					color="secondary"
				/>
			</Fragment>
		</div>
	);
}

export default BasicDateTimePicker;
