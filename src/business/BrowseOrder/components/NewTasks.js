import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPosition() {
	return (
		<div className="browse-orders--top-bar--new-tasks">
			<FormControl component="fieldset">
				<FormGroup aria-label="position" row>
					<FormControlLabel
						value="new"
						control={<Switch color="secondary" />}
						label="Available Tasks Only"
						labelPlacement="start"
					/>
				</FormGroup>
			</FormControl>
		</div>
	);
}
