import React from "./node_modules/react";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";
// @material-ui/core components
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Grid from "./node_modules/@material-ui/core/Grid";

const styles = {
	grid: {
		margin: "0 -15px !important",
		width: "unset"
	}
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
	const classes = useStyles();
	const { children, ...rest } = props;
	return (
		<Grid container {...rest} className={classes.grid}>
			{children}
		</Grid>
	);
}

GridContainer.propTypes = {
	children: PropTypes.node
};
