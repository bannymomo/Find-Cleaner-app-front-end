import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export default function BasicTextFields(props) {
	return (
		<div className="take-order--typography">
			<Grid container>
				<Grid>
					<AttachMoneyIcon />
				</Grid>
				<Grid>
					<Typography>
						<b>
							It will cost you <span>${props.price}</span> in
							total
						</b>
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
