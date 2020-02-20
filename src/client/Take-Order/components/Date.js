import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
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

export default function FormControlLabelPosition() {
	const [value, setValue] = React.useState("within-one-week");
	const handleChange = event => {
		setValue(event.target.value);
	};
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
				<RadioGroup
					aria-label="date"
					name="date"
					value={value}
					onChange={handleChange}
					row
					size="small"
				>
					<FormControlLabel
						value="today"
						control={<Radio color="secondary" />}
						label="Today"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="by-a-certain-day"
						control={<Radio color="secondary" />}
						label="By a certain day"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="within-one-week"
						control={<Radio color="secondary" />}
						label="Within 1 week"
						labelPlacement="end"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
