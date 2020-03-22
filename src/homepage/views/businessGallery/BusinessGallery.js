import React from "react";
import { fetchAllBusiness } from "../../../api/business";
import ErrorMessage from "../../../UI/ErrorMessage";
import { CircularProgress } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import GridContainer from "./components/GridContainer";
import "./style/businessGallery.scss";
import Button from "@material-ui/core/Button";

class BusinessGallery extends React.Component {
	state = {
		businesses: [],
		isLoading: false,
		error: null,
		start: 0,
		end: 10
	};

	async componentDidMount() {
		this.setState(
			{
				isLoading: true,
				businesses: [],
				start: 0,
				end: 10
			},
			async () => {
				try {
					this.loadBusiness();
				} catch (error) {
					this.setState({ error, isLoading: false });
				}
			}
		);
	}

	async loadBusiness() {
		const response = await fetchAllBusiness();
		const start = this.state.start < response.length ? this.state.start : 0;
		const end =
			this.state.start < response.length ? this.state.start + 10 : 10;

		const businesses = response.slice(start, end);

		this.setState({
			businesses: businesses,
			start: start + 10,
			end: end + 10,
			isLoading: false
		});
	}
	loadMoreBusinesses = async () => {
		try {
			this.setState({
				isLoading: true
			});
			this.loadBusiness();
		} catch (error) {
			this.setState({ error, isLoading: false });
		}
	};

	render() {
		return (
			<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
				<div className="homepage-child-components__title--black">
					Our Business Partners
				</div>
				<Button
					onClick={this.loadMoreBusinesses}
					className="business-gallery__load-more-btn"
				>
					load more businesses
				</Button>
				<div className="business-gallery__container">
					{this.state.isLoading ? (
						<div className="business-gallery__progress--container">
							<CircularProgress
								size={200}
								color="primary"
								className="business-gallery__progress--circle"
							/>
						</div>
					) : !!this.state.error ? (
						<ErrorMessage error={this.state.error} />
					) : (
						<GridContainer businesses={this.state.businesses} />
					)}
				</div>
			</ScrollAnimation>
		);
	}
}

export default BusinessGallery;
