import React from "react";
import { wrapGrid } from "animate-css-grid";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "./Card";

class Grid extends React.Component {
	componentDidMount() {
		wrapGrid(this.grid, {
			easing: "backOut",
			stagger: 10,
			duration: 800
		});
	}

	render() {
		let classes = "grid";
		Object.keys(this.props.settings)
			.filter(k => this.props.settings[k])
			.forEach(k => (classes += " " + k));
		return (
			<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
				<div className={classes} ref={el => (this.grid = el)}>
					{this.props.businesses.map(business => (
						<Card business={business} key={business._id} />
					))}
				</div>
			</ScrollAnimation>
		);
	}
}

export default Grid;
