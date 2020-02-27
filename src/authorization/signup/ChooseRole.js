import React, { Fragment } from "react";
import { Container, Button, CssBaseline, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MainNavigation from "../../navigation/MainNavigation";
import { SIGNUP_URL } from "../../routes/URLMap";
import "./style/signup.scss";

const useStyles = makeStyles(theme => ({
	button: {
		marginLeft: "40%"
	}
}));

const Signup = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<MainNavigation />
			<div className="chooseRole">
				<CssBaseline />
				<Container className="chooseRole__client">
					<Button
						variant="contained"
						size="large"
						color="primary"
						className={classes.button}
					>
						<NavLink
							to={{
								pathname: `${SIGNUP_URL}/user`,
								role: "client"
							}}
							style={{ textDecoration: "none", color: "#FFEEAB" }}
						>
							I'm a User
						</NavLink>
					</Button>
				</Container>
				<Container className="chooseRole__business">
					<Button
						variant="contained"
						size="large"
						color="primary"
						className={classes.button}
					>
						<NavLink
							to={{
								pathname: `${SIGNUP_URL}/user`,
								role: "business"
							}}
							style={{ textDecoration: "none", color: "#87B7CB" }}
						>
							I'm a Business
						</NavLink>
					</Button>
				</Container>
			</div>
		</Fragment>
	);
};

export default Signup;
