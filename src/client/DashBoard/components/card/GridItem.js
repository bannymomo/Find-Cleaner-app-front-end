import React from "./node_modules/react";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";
// @material-ui/core components
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Grid from "./node_modules/@material-ui/core/Grid";

const styles = {
	grid: {
		padding: "0 15px !important"
	}
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
	const classes = useStyles();
	const { children, ...rest } = props;
	return (
		<Grid item {...rest} className={classes.grid}>
			{children}
		</Grid>
	);
}

GridItem.propTypes = {
	children: PropTypes.node
};
