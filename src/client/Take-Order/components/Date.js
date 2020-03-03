import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			marginLeft: theme.spacing(1.2)
		}
	}
}));

export default function FormControlLabelPosition(props) {
	let today = new Date();
	today.setHours(23,59,59,999);
	const inAWeek = new Date(Date.now() + 604800000);

	const [selectedValue, setSelectedValue] = React.useState("");
	const handleChange = event => {
		setSelectedValue(event.target.value);
	};

	const handleChangeToday = event => {
		props.handleChange(event);
		setSelectedValue("today");
	}
	const handleChangeInAWeek = event => {
		props.handleChange(event);
		setSelectedValue("in-a-week");
	}
	const classes = useStyles();

	return (
		<div className="take-order--radio">
			<Grid container>
				<Grid>
					<EventAvailableOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>When do you need it done?</Typography>
				</Grid>
			</Grid>
			<FormControl className={classes.root} component="fieldset">
				<FormControlLabel
					label="Today"
					control={<Radio
						checked={selectedValue === "today"}
						onChange={handleChangeToday}
						value={today}
						name="dueDate"
					/>}
				/>
				<FormControlLabel
					label="By a certain day"
					control={<Radio
						checked={selectedValue === "by-a-certain-day"}
						onChange={handleChange}
						value="by-a-certain-day"
						name="dueDate"
					/>}
				/>
				<FormControlLabel
					label="Within 1 week"
					control={<Radio
						checked={selectedValue === "in-a-week"}
						onChange={handleChangeInAWeek}
						value={inAWeek}
						name="dueDate"
					/>}
				/>
			</FormControl>
		</div>
	);
}
