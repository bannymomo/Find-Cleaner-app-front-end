import React from "react";
import { useSpring, animated } from "react-spring";
import house from "../../../assets/images/house.png";
import kitchen from "../../../assets/images/kitchen.png";
import carpet from "../../../assets/images/carpet.png";
import rent from "../../../assets/images/rent.png";
import bathroom from "../../../assets/images/bathroom.png";
import glass from "../../../assets/images/glass.png";
import {
	makeStyles,
	createMuiTheme,
	createStyles,
	ThemeProvider
} from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		}
	})
);

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#3F88DE"
		},
		secondary: {
			main: "#f50057"
		}
	}
});
export default function FloatingActionButtonSize() {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});
	const listArray = [
		{ img: house, description: "Home Cleaning" },
		{ img: carpet, description: "Carpet Cleaning" },
		{ img: rent, description: "End of Lease Cleaning" },
		{ img: glass, description: "Glass Cleaning" },
		{ img: kitchen, description: "Kitchen Cleaning" },
		{ img: bathroom, description: "Bathroom Cleaning" }
	];
	const classes = useStyles();

	return (
		<animated.div style={props} className="list-array__container--whole">
			<ThemeProvider theme={theme}>
				{listArray.map((list, index) => {
					return (
						<div
							key={index}
							className="list-array__container--single"
						>
							<div>
								<Fab color="primary" className={classes.margin}>
									<img
										src={list.img}
										style={{ width: 28, height: 28 }}
									/>
								</Fab>
							</div>
							<span>{list.description}</span>
						</div>
					);
				})}
			</ThemeProvider>
		</animated.div>
	);
}
