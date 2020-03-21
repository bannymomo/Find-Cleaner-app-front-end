import React from "react";
import Grid from "./Grid";
import "../style/businessGallery.scss";

class GridContainer extends React.Component {
	state = {
		"grid-gap": false,
		"grid-template-columns": false
	};

	render() {
		return (
			<div className="p-4">
				<Grid
					settings={this.state}
					businesses={this.props.businesses}
				/>
			</div>
		);
	}
}

export default GridContainer;
