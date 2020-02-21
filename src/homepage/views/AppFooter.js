import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

function Copyright() {
	return (
		<React.Fragment>
			{"© "}
			<Link color="inherit" href="https://material-ui.com/">
				Find Cleaner
			</Link>{" "}
			{new Date().getFullYear()}
		</React.Fragment>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		backgroundColor: theme.palette.secondary.light
	},
	container: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: "flex"
	},
	iconsWrapper: {
		height: 120
	},
	icons: {
		display: "flex"
	},
	icon: {
		width: 48,
		height: 48,
		textDecoration: "none",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.palette.warning.main,
		marginRight: theme.spacing(1),
		"&:hover": {
			backgroundColor: theme.palette.warning.dark
		}
	},
	list: {
		margin: 0,
		listStyle: "none",
		padding: 0
	},
	listItem: {
		paddingTop: theme.spacing(0.5),
		paddingBottom: theme.spacing(0.5)
	},
	language: {
		marginTop: theme.spacing(1),
		width: 150
	}
}));

export default function AppFooter() {
	const classes = useStyles();

	return (
		<Typography component="footer" className={classes.root}>
			<Container className={classes.container}>
				<Grid container spacing={5}>
					<Grid item xs={6} sm={6} md={6}>
						<Grid
							container
							direction="column"
							justify="flex-end"
							className={classes.iconsWrapper}
							spacing={2}
						>
							<Grid item className={classes.icons}>
								<a
									href="https://www.facebook.com/"
									className={classes.icon}
								>
									<i className="fab fa-facebook-f"></i>
								</a>
								<a
									href="https://twitter.com/"
									className={classes.icon}
								>
									<i className="fab fa-twitter"></i>
								</a>
							</Grid>
							<Grid item>
								<Copyright />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Typography variant="h6" marked="left" gutterBottom>
							Legal
						</Typography>
						<ul className={classes.list}>
							<li className={classes.listItem}>
								<Link href="/terms/">Terms</Link>
							</li>
							<li className={classes.listItem}>
								<Link href="/privacy/">Privacy</Link>
							</li>
						</ul>
					</Grid>

					<Grid item></Grid>
				</Grid>
			</Container>
		</Typography>
	);
}
