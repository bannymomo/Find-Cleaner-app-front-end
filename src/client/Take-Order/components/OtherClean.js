import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import CallToActionOutlinedIcon from "@material-ui/icons/CallToActionOutlined";
import GridOnIcon from "@material-ui/icons/GridOn";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			marginLeft: theme.spacing(1),
			width: theme.spacing(12),
			height: theme.spacing(8)
		}
	}
}));

export default function FormControlLabelPosition() {
	const classes = useStyles();

	return (
		<div className="take-order--checkbox">
			<FormControl component="fieldset">
				<Grid container>
					<Grid>
						<EventNoteOutlinedIcon />
					</Grid>
					<Grid>
						<Typography>
							Do you need any of these cleaned?
						</Typography>
					</Grid>
				</Grid>
				<FormGroup aria-label="position" row>
					<div className={classes.root}>
						<Paper elevation={0}>
							<FormControlLabel
								value="oven"
								control={<Checkbox color="secondary" />}
								label={<CallToActionOutlinedIcon />}
								labelPlacement="start"
							/>{" "}
							<Typography>Oven</Typography>
						</Paper>
					</div>
					<div className={classes.root}>
						<Paper elevation={0}>
							<FormControlLabel
								value="windows"
								control={<Checkbox color="secondary" />}
								label={<SettingsSystemDaydreamIcon />}
								labelPlacement="start"
							/>{" "}
							<Typography>Windows</Typography>
						</Paper>
					</div>
					<div className={classes.root}>
						<Paper elevation={0}>
							<FormControlLabel
								value="cabinets"
								control={<Checkbox color="secondary" />}
								label={<StorageIcon />}
								labelPlacement="start"
							/>{" "}
							<Typography>Cabinets</Typography>
						</Paper>
					</div>
					<div className={classes.root}>
						<Paper elevation={0}>
							<FormControlLabel
								value="carpet"
								control={<Checkbox color="secondary" />}
								label={<GridOnIcon />}
								labelPlacement="start"
							/>{" "}
							<Typography>Carpet</Typography>
						</Paper>
					</div>
				</FormGroup>
			</FormControl>
		</div>
	);
}
