import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import BusinessProfile from "../../../../components/businessProfile/BusinessProfile";

class Card extends React.Component {
	state = { expanded: false };

	randomNumber = Math.floor(Math.random() * 5) + 1;

	render() {
		return (
			<>
				<div
					className={`card card--${this.randomNumber} ${
						this.state.expanded ? "card--expanded" : ""
					}`}
					onClick={() => {
						this.setState({ expanded: !this.state.expanded });
					}}
				>
					<div
						className={`${
							this.state.expanded
								? "card__content--expanded"
								: "card__content"
						}`}
					>
						<Avatar
							className={`${
								this.state.expanded
									? "card__avatar--expanded"
									: "card__avatar"
							}`}
							alt="photo"
							src={this.props.business.photo}
						/>
						<div
							className={`${
								this.state.expanded
									? "card__name--expanded"
									: "card__name"
							}`}
						>
							{this.props.business.businessName}
						</div>
						<Button
							className={`${
								this.state.expanded
									? "card__learn-more--expanded"
									: "card__learn-more"
							}`}
						>
							show more...
						</Button>
						<div
							className={`${
								this.state.expanded
									? "card__abn--expanded"
									: "card__abn"
							}`}
						>
							ABN: {this.props.business.ABNNumber}
						</div>
						<BusinessProfile
							business={this.props.business}
							expanded={this.state.expanded}
						/>
					</div>
				</div>
			</>
		);
	}
}
export default Card;
