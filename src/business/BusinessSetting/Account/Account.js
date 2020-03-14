import React, { Component, Fragment } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { updateBusinessById, fetchBusinessById } from "../../../api/business";

class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			defaultValue: {
				businessName: "",
				address: "",
				email: "",
				postcode: "",
				telephoneNumber: "",
				ABNNumber: ""
			},
			businessName: "",
			address: "",
			email: "",
			postcode: "",
			telephoneNumber: "",
			ABNNumber: "",
			isLoading: false,
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
		fetchBusinessById(businessID).then(data => {
			this.setState({
				defaultValue: {
					businessName: data.businessName,
					address: data.address,
					email: data.email,
					postcode: data.postcode,
					telephoneNumber: data.telephoneNumber,
					ABNNumber: data.ABNNumber
				},
				isLoading: false
			});
		});
	};

	setInundatedInfo = () => {
		return {
			businessName:
				this.state.businessName === ""
					? this.state.defaultValue.businessName
					: this.state.businessName,
			address:
				this.state.address === ""
					? this.state.defaultValue.address
					: this.state.address,
			email:
				this.state.email === ""
					? this.state.defaultValue.email
					: this.state.email,
			postcode: this.state.postcode === ""
				? this.state.defaultValue.postcode
				: this.state.postcode,
			telephoneNumber:
				this.state.telephoneNumber === ""
					? this.state.defaultValue.telephoneNumber
					: this.state.telephoneNumber,
			ABNNumber:
				this.state.ABNNumber === ""
					? this.state.defaultValue.ABNNumber
					: this.state.ABNNumber
		}
	}

	updateInfo = () => {
		const businessInfo = this.setInundatedInfo();
		const businessID = this.props.match.params.businessId;
		this.setState({ isLoading: true }, () => {
			updateBusinessById(businessID, businessInfo)
				.then(data => {
					this.setState(
						{
							isLoading: false,
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
				.catch(error => this.setState({ error, isLoading: false }));
		});
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

	renderForm = () => {
		if (this.state.isLoading) {
			return (
				<div className="account__progress--container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		}
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
							value={
								this.state.canNotEdit
									? this.state.defaultValue.businessName
									: this.state.businessName
							}
							onChange={this.changeHandler}
						/>
						<TextField
							variant="outlined"
							className="account__form--input"
							label="ABN Number"
							name="ABNNumber"
							margin="normal"
							disabled={this.state.canNotEdit}
							// defaultValue={this.state.ABNNumber}
							value={
								this.state.canNotEdit
									? this.state.defaultValue.ABNNumber
									: this.state.ABNNumber
							}
							onChange={this.changeHandler}
						/>
					</div>
				</div>

				<h5>Contact Details</h5>
				<div className="account__form--contact">
					<TextField
						variant="outlined"
						className="account__form--input"
						label="Telephone Number"
						name="telephoneNumber"
						disabled={this.state.canNotEdit}
						value={
							this.state.canNotEdit
								? this.state.defaultValue.telephoneNumber
								: this.state.telephoneNumber
						}
						onChange={this.changeHandler}
					/>
					<TextField
						variant="outlined"
						className="account__form--input"
						label="Email"
						name="email"
						margin="normal"
						disabled={this.state.canNotEdit}
						value={
							this.state.canNotEdit
								? this.state.defaultValue.email
								: this.state.email
						}
						onChange={this.changeHandler}
					/>
					<TextField
						variant="outlined"
						className="account__form--input"
						label="Address"
						name="address"
						margin="normal"
						disabled={this.state.canNotEdit}
						value={
							this.state.canNotEdit
								? this.state.defaultValue.address
								: this.state.address
						}
						onChange={this.changeHandler}
					/>
					<TextField
						variant="outlined"
						className="account__form--input"
						label="Postcode"
						name="postcode"
						margin="normal"
						disabled={this.state.canNotEdit}
						value={
							this.state.canNotEdit
								? this.state.defaultValue.postcode
								: this.state.postcode
						}
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
	render() {
		return (
			<Fragment>
				<h1 className="password__form--header">Account</h1>
				{this.renderForm()}
			</Fragment>
		);
	}
}

export default Account;
