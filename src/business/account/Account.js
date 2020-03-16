import React, { Fragment, Component } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { updateBusinessById, fetchBusinessById } from "../../api/business";
import Alert from "@material-ui/lab/Alert";
import "../../client/account/style/account.scss";

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businessName: "",
			address: "",
			email: "",
			postcode: "",
			contactNumber: "",
			ABNNumber: "",
			description: "",

			isLoading: false,
			isUpdating: false,
			error: null,
			canNotEdit: true,
			updateButtonHidden: true,
			editButtonHidden: false
		};
	}

	componentDidMount() {
		this.updateDefaultValue();
	}

	updateDefaultValue = () => {
		const businessID = this.props.match.params.businessId;
		this.setState({ isLoading: true });
		fetchBusinessById(businessID)
			.then(data => {
				console.log(data)
				this.setState({
					businessName: data.businessName,
					address: data.address,
					email: data.email,
					postcode: data.postcode,
					contactNumber: data.telephoneNumber,
					ABNNumber: data.ABNNumber,
					description: data.description,
					isLoading: false
				});
			})
			.catch(error => this.setState({ error, isLoading: false }));
	};

	changeHandler = event => {
		const key = event.target.name;
		const value = event.target.value;
		this.setState({ [key]: value });
	};

	disableEdit = () => {
		this.setState({
			canNotEdit: false,
			updateButtonHidden: false,
			editButtonHidden: true
		});
	};

	updateInfo = () => {
		const businessInfo = {
			businessName: this.state.businessName,
			address: this.state.address,
			email: this.state.email,
			postcode: this.state.postcode,
			contactNumber: this.state.telephoneNumber,
			ABNNumber: this.state.ABNNumber,
			description: this.state.description,
		};
		const businessID = this.props.match.params.businessId;
		this.setState({ isUpdating: true }, () => {
			updateBusinessById(businessID, businessInfo)
				.then(() => {
					this.setState(
						{
							isUpdating: false,
							updateButtonHidden: true,
							editButtonHidden: false,
							canNotEdit: true
						},
						() => {
							this.updateDefaultValue();
							window.location.reload();
						}
					);
				})
				.catch(error => this.setState({ error, isUpdating: false }));
		});
	};

	renderContent = () => {
		if (this.state.isLoading) {
			return (
				<div className="account__progress--container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		} else {
			return (
				<Fragment>
					<h5>Business Details</h5>
					<div className="account__form--container">
						<div className="account__form--edit">
							{!this.state.editButtonHidden ? (
								<Button
									variant="outlined"
									onClick={this.disableEdit}
								>
									Edit
								</Button>
							) : null}
						</div>
						<div className="account__form--personal">
							<TextField
								variant="outlined"
								className="account__form--input"
								label="Business Name"
								name="businessName"
								disabled={this.state.canNotEdit}
								value={this.state.businessName}
								onChange={this.changeHandler}
							/>
							<TextField
								variant="outlined"
								className="account__form--input"
								label="ABNNumber"
								name="ABNNumber"
								margin="normal"
								disabled={this.state.canNotEdit}
								value={this.state.ABNNumber}
								onChange={this.changeHandler}
							/>
							<TextField
								variant="outlined"
								className="account__form--input"
								label="Description"
								name="description"
								margin="normal"
								multiline
								disabled={this.state.canNotEdit}
								value={this.state.description}
								onChange={this.changeHandler}
							/>
						</div>
					</div>

					<h5>Contact Details</h5>
					<div className="account__form--contact">
						<TextField
							variant="outlined"
							className="account__form--input"
							label="Contact Number"
							name="contactNumber"
							disabled={this.state.canNotEdit}
							value={this.state.contactNumber}
							onChange={this.changeHandler}
						/>
						<TextField
							variant="outlined"
							className="account__form--input"
							label="Email Address"
							name="email"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.email}
							onChange={this.changeHandler}
						/>
						<TextField
							variant="outlined"
							className="account__form--input"
							label="Address"
							name="address"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.address}
							onChange={this.changeHandler}
						/>
						<TextField
							variant="outlined"
							className="account__form--input"
							label="Postcode"
							name="postcode"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.postcode}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="account__from--button">
						{!this.state.updateButtonHidden ? (
							<Button
								variant="contained"
								color="primary"
								onClick={this.updateInfo}
							>
								UPDATE
							</Button>
						) : null}

						{!!this.state.error && (
							<Alert
								severity="error"
								className="account__form--error"
							>
								Update fail, please try again.
							</Alert>
						)}
					</div>
				</Fragment>
			)
		}
	}

	render() {
		return (
			<Fragment>
				<h1 className="account__form--header">Account</h1>
				{this.renderContent()}
			</Fragment>
		);
	}
}

export default Account;
