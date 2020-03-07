import React from "react";
import { useSpring, animated } from "react-spring";
import house from "../../../assets/images/house.png";
import kitchen from "../../../assets/images/kitchen.png";
import carpet from "../../../assets/images/carpet.png";
import rent from "../../../assets/images/rent.png";
import bathroom from "../../../assets/images/bathroom.png";
import glass from "../../../assets/images/glass.png";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		}
	})
);

export default function FloatingActionButtonSize() {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});
	const listArray = [
		{ img: house, alt: "Home Cleaning", description: "Home Cleaning" },
		{ img: carpet, alt: "Carpet Cleaning", description: "Carpet Cleaning" },
		{
			img: rent,
			alt: "End of Lease Cleaning",
			description: "End of Lease Cleaning"
		},
		{ img: glass, alt: "Glass  Cleaning", description: "Glass Cleaning" },
		{
			img: kitchen,
			alt: "Kitchen Cleaning",
			description: "Kitchen Cleaning"
		},
		{
			img: bathroom,
			alt: "Bathroom Cleaning",
			description: "Bathroom Cleaning"
		}
	];
	const classes = useStyles();

	return (
		<animated.div style={props} className="list-array__container--whole">
			{listArray.map((list, index) => {
				return (
					<div key={index} className="list-array__container--single">
						<div>
							<Fab color="primary" className={classes.margin}>
								<img
									src={list.img}
									alt={list.alt}
									className="list-array__icon--single"
								/>
							</Fab>
						</div>
						<span>{list.description}</span>
					</div>
				);
			})}
		</animated.div>
	);
}
