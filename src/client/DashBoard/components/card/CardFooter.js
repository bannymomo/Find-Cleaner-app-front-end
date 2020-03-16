import React from "./node_modules/react";
// nodejs library that concatenates classes
import classNames from "./node_modules/classnames";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";
// @material-ui/core components
import { makeStyles } from "./node_modules/@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../style/card/cardFooterStyle";

const useStyles = makeStyles(styles);

export default function CardFooter(props) {
	const classes = useStyles();
	const {
		className,
		children,
		plain,
		profile,
		stats,
		chart,
		...rest
	} = props;
	const cardFooterClasses = classNames({
		[classes.cardFooter]: true,
		[classes.cardFooterPlain]: plain,
		[classes.cardFooterProfile]: profile,
		[classes.cardFooterStats]: stats,
		[classes.cardFooterChart]: chart,
		[className]: className !== undefined
	});
	return (
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	);
}

CardFooter.propTypes = {
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	stats: PropTypes.bool,
	chart: PropTypes.bool,
	children: PropTypes.node
};
