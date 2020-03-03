import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const StyledToggleButtonGroup = withStyles(theme => ({
	grouped: {
		margin: theme.spacing(1),
		border: "none",
		padding: theme.spacing(0, 3),
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius,
			color: "#000",
			backgroundColor: "#0001"
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius,
			color: "#000",
			backgroundColor: "#0001"
		}
	}
}))(ToggleButtonGroup);

export default function CustomizedDividers(props) {
	const number = props.bathrooms.toString();

	return (
		<div className="take-order--toggle-button-group">
			<Grid container>
				<Grid>
					<BathtubOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>How many bathrooms do you have?</Typography>
				</Grid>
			</Grid>

			<StyledToggleButtonGroup
				size="small"
				value={number}
				exclusive
				onChange={props.handleChange}
				aria-label="bathrooms"
			>
				<ToggleButton
					name="bathrooms"
					value="0"
					aria-label="no bathroom"
				>
					<span className="MuiTouchRipple-root">0</span>
				</ToggleButton>
				<ToggleButton
					name="bathrooms"
					value="1"
					aria-label="one bathroom"
				>
					<span className="MuiTouchRipple-root">1</span>
				</ToggleButton>
				<ToggleButton
					name="bathrooms"
					value="2"
					aria-label="two bathrooms"
				>
					<span className="MuiTouchRipple-root">2</span>
				</ToggleButton>
				<ToggleButton
					name="bathrooms"
					value="3"
					aria-label="three bathrooms"
				>
					<span className="MuiTouchRipple-root">3+</span>
				</ToggleButton>
			</StyledToggleButtonGroup>
		</div>
	);
}
