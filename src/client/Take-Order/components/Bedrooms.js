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

export default function CustomizedDividers() {
	const [number, setNumber] = React.useState("1");

	const handleNumber = (event, newNumber) => {
		setNumber(newNumber);
	};

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
				onChange={handleNumber}
				aria-label="bedrooms"
			>
				<ToggleButton value="1" aria-label="one bedroom">
					1
				</ToggleButton>
				<ToggleButton value="2" aria-label="two bedrooms">
					2
				</ToggleButton>
				<ToggleButton value="3" aria-label="three bedrooms">
					3
				</ToggleButton>
				<ToggleButton value="4" aria-label="four bedrooms">
					4
				</ToggleButton>
				<ToggleButton value="5+" aria-label="five more bedrooms">
					5+
				</ToggleButton>
			</StyledToggleButtonGroup>
		</div>
	);
}
