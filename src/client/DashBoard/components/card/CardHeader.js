import React from "./node_modules/react";
// nodejs library that concatenates classes
import classNames from "./node_modules/classnames";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";
// @material-ui/core components
import { makeStyles } from "./node_modules/@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../style/card/cardHeaderStyle";

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
	const classes = useStyles();
	const { className, children, plain, stats, icon, ...rest } = props;
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes.cardHeaderPlain]: plain,
		[classes.cardHeaderStats]: stats,
		[classes.cardHeaderIcon]: icon,
		[className]: className !== undefined
	});
	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	);
}

CardHeader.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf([
		"warning",
		"success",
		"danger",
		"info",
		"primary",
		"rose"
	]),
	plain: PropTypes.bool,
	stats: PropTypes.bool,
	icon: PropTypes.bool,
	children: PropTypes.node
};
