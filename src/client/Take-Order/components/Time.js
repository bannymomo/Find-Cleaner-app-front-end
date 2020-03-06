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

function BasicDateTimePicker(props) {
	const [selectedDate, handleDateChange] = useState(new Date());
	const classes = useStyles();

	const handleOnChange = (value, newDate) => {
		handleDateChange(newDate);
		props.handleChangeDate(value);
	};

	return (
		<div className="take-order--date-time-picker">
			<div className={classes.root}>
				<Fragment>
					<DateTimePicker
						name="dueDate"
						label="DateTimePicker"
						inputVariant="outlined"
						value={selectedDate}
						onChange={handleOnChange}
						color="secondary"
					/>
				</Fragment>
			</div>
		</div>
	);
}

export default BasicDateTimePicker;
