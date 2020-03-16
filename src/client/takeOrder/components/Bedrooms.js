import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../style/takeorder.scss";

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
	const number = props.bedrooms.toString();

	return (
		<div className="take-order--toggle-button-group">
			<Grid container>
				<Grid>
					<KingBedOutlinedIcon />
				</Grid>
				<Grid>
					<Typography>How many bedrooms do you have?</Typography>
				</Grid>
			</Grid>

			<StyledToggleButtonGroup
				size="small"
				value={number}
				exclusive
				onChange={props.handleChange}
				aria-label="bedrooms"
			>
				<ToggleButton name="bedrooms" value="0" aria-label="no bedroom">
					<span className="MuiTouchRipple-root">0</span>
				</ToggleButton>
				<ToggleButton
					name="bedrooms"
					value="1"
					aria-label="one bedroom"
				>
					<span className="MuiTouchRipple-root">1</span>
				</ToggleButton>
				<ToggleButton
					name="bedrooms"
					value="2"
					aria-label="two bedrooms"
				>
					<span className="MuiTouchRipple-root">2</span>
				</ToggleButton>
				<ToggleButton
					name="bedrooms"
					value="3"
					aria-label="three bedrooms"
				>
					<span className="MuiTouchRipple-root">3</span>
				</ToggleButton>
				<ToggleButton
					name="bedrooms"
					value="4"
					aria-label="four bedrooms"
				>
					<span className="MuiTouchRipple-root">4</span>
				</ToggleButton>
				<ToggleButton
					name="bedrooms"
					value="5"
					aria-label="five more bedrooms"
				>
					<span className="MuiTouchRipple-root">5+</span>
				</ToggleButton>
			</StyledToggleButtonGroup>
		</div>
	);
}
