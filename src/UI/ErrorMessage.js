import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	},
	closeButton: {
		marginBottom: theme.spacing(6)
	}
}));

export default function ErrorMessage({ error }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	return (
		<div className={classes.root}>
			<Collapse in={open}>
				<Alert
					severity="error"
					action={
						<IconButton
							className={classes.closeButton}
							aria-label="close"
							color="#0005"
							size="small"
							onClick={() => {
								setOpen(false);
							}}
						>
							<CloseIcon fontSize="1rem" />
						</IconButton>
					}
				>
					<AlertTitle>
						Error Alert: Sorry, something went wrong
					</AlertTitle>
					<p>{error && error.message}</p>
				</Alert>
			</Collapse>
		</div>
	);
}
