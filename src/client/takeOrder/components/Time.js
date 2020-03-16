import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		marginBottom: theme.spacing(3),
		"& > *": {
			marginLeft: theme.spacing(1.2)
		}
	}
}));

const BasicDateTimePicker = ({ handleChangeDate }) => {
	const [newDate, handleDateChange] = useState(new Date());

	const classes = useStyles();

	return (
		<div className="take-order--date-time-picker">
			<div className={classes.root}>
				<Fragment>
					<DateTimePicker
						name="dueDate"
						label="DateTimePicker"
						inputVariant="outlined"
						value={newDate}
						onChange={newDate => {
							const newDueDate = newDate;
							handleDateChange(newDate);
							handleChangeDate(newDueDate);
						}}
						color="secondary"
					/>
				</Fragment>
			</div>
		</div>
	);
};

export default BasicDateTimePicker;
