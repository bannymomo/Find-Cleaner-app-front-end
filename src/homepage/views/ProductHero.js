import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../UI/Button";
import ProductHeroLayout from "./ProductHeroLayout";
import { SIGNUP_URL } from "../../routes/URLMap";
import "../style/homepage.scss";
import { Link } from "react-router-dom";
import WaterWave from "react-water-wave";
import homePic from "../../assets/images/homepage.png";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = theme => ({
	button: {
		minWidth: 200,
		transition: "all 0.5s",
		position: "relative",
		"&:hover": {
			transform: "translateY(-3px)",
			boxShadow: "0 10px 20px rgba(0,0,0,.4)"
		},
		"&:active": {
			transform: "translateY(-1px)",
			boxShadow: "0 5px 10px rgba(0,0,0,.4)"
		}
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
		<WaterWave imageUrl={homePic} dropRadius={30}>
			{methods => (
				<div className="product-hero__background--gradient">
					<ProductHeroLayout>
						<div className="product-hero__title--black">
							Just one touch then experience
							<br />
							the difference
						</div>
						<div className="product-hero__text--black">
							Your one stop for home cleaning needs.
						</div>

						<Button
							color="primary"
							variant="contained"
							size="large"
							className={classes.button}
							component={Link}
							to={{
								pathname: `${SIGNUP_URL}/user/client`
							}}
						>
							Get started now
						</Button>
					</ProductHeroLayout>
				</div>
			)}
		</WaterWave>
	);
}

ProductHero.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
