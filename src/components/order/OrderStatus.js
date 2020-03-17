import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
	ALL_ORDERS,
	NEW_ORDER,
	CANCELLED_BY_CLIENT,
	ACCEPTED,
	CANCELLED_BY_BUSINESS,
	DONE,
	CLIENT_ROLE
} from "../../utils/variables";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	select: {
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(2),
		width: "60vw",
		[theme.breakpoints.down("xs")]: {
			"&>*": {
				fontSize: 14
			}
		}
	},
	label: {
		color: "#3f88de",
		marginLeft: theme.spacing(2)
	}
}));

export default function OrderStatus(props) {
	const classes = useStyles();
	const [status, setStatus] = React.useState(`${ALL_ORDERS}`);

	const handleChange = event => {
		setStatus(event.target.value);

		switch (event.target.value) {
			case `${ALL_ORDERS}`:
				props.searchAll();
				break;
			case `${NEW_ORDER}`:
				props.searchNew();
				break;

			case `${CANCELLED_BY_CLIENT}`:
				props.searchWithdraw();
				break;
			case `${ACCEPTED}`:
				props.searchAccepted();
				break;
			case `${CANCELLED_BY_BUSINESS}`:
				props.searchCancelled();
				break;
			case `${DONE}`:
				props.searchDone();
				break;
			default:
				props.searchAll();
		}
	};
	return (
		<div>
			<FormControl className={classes.formControl}>
				<Select
					value={status}
					onChange={handleChange}
					displayEmpty
					className={classes.select}
				>
					<MenuItem value={ALL_ORDERS}>All Orders</MenuItem>
					{props.role === CLIENT_ROLE && (
						<MenuItem value={NEW_ORDER}>Placed Orders</MenuItem>
					)}
					{props.role === CLIENT_ROLE && (
						<MenuItem value={CANCELLED_BY_CLIENT}>
							Orders Cancelled by Client
						</MenuItem>
					)}
					<MenuItem value={ACCEPTED}>Assigned Orderss</MenuItem>
					<MenuItem value={CANCELLED_BY_BUSINESS}>
						Orders Cancelled by Business
					</MenuItem>
					<MenuItem value={DONE}>Completed Orders</MenuItem>
				</Select>
				<FormHelperText className={classes.label}>
					Select Order Status
				</FormHelperText>
			</FormControl>
		</div>
	);
}
