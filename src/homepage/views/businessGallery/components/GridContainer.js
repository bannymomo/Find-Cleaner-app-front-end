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
				{/* <div className="mb-4 pt-4">
					{Object.keys(this.state).map(k => (
						<button
							className="btn"
							onClick={() =>
								this.setState({ [k]: !this.state[k] })
							}
						>
							toggle <code>{k}</code>
						</button>
					))}
				</div> */}
				<Grid
					settings={this.state}
					businesses={this.props.businesses}
				/>
			</div>
		);
	}
}

export default GridContainer;
