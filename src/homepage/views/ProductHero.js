import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { SIGNUP_URL } from "../../routes/URLMap";
import "../style/homepage.scss";
import { Link } from "react-router-dom";

const styles = theme => ({
	button: {
		minWidth: 200
	},
	h5: {
		marginBottom: theme.spacing(4),
		marginTop: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginTop: theme.spacing(10)
		}
	},
	more: {
		marginTop: theme.spacing(2)
	}
});

function ProductHero(props) {
	const { classes } = props;

	return (
		<div className="product-hero__background--gradient">
			<ProductHeroLayout>
				<Typography
					color="inherit"
					align="center"
					variant="h2"
					marked="center"
				>
					The best person for the job isn't always who you think
				</Typography>
				<Typography
					color="inherit"
					align="center"
					variant="h5"
					className={classes.h5}
				>
					Find the people with the skills you need on Find Cleaner
				</Typography>
				<Button
					color="primary"
					variant="contained"
					size="large"
					className={classes.button}
					component={Link}
					to={SIGNUP_URL}
				>
					Register
				</Button>
				<Typography
					variant="body2"
					color="inherit"
					className={classes.more}
				>
					Discover the experience
				</Typography>
				<div className="homepage__arrow--down">
					<i className="fas fa-long-arrow-alt-down"></i>
				</div>
			</ProductHeroLayout>
		</div>
	);
}

ProductHero.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
