import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
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
		<div>
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
				onChange={handleNumber}
				aria-label="bathrooms"
			>
				<ToggleButton value="1" aria-label="one bathroom">
					1
				</ToggleButton>
				<ToggleButton value="2" aria-label="two bathrooms">
					2
				</ToggleButton>
				<ToggleButton value="3+" aria-label="three bathrooms">
					3+
				</ToggleButton>
			</StyledToggleButtonGroup>
		</div>
	);
}
