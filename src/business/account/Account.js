import React, { Fragment, Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { updateBusinessById, fetchBusinessById, updateAvatar } from "../../api/business";
import Alert from "@material-ui/lab/Alert";
import "./style/account.scss";

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
			avatar: null,

			isLoading: false,
			isUpdating: false,
			error: null,
			uploadError: null,
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

	handleUpload = () => {
		const businessId = this.props.match.params.businessId;
		const avatar = this.state.avatar;
		const data = new FormData();
		data.append('avatar', avatar);
		this.setState({ isUploading: true }, () => {
			updateAvatar(businessId, data)
				.then(() => {
					this.setState(
						{
							isUploading: false,
						},
						() => window.location.reload()
					)
				})
				.catch(error => this.setState({ uploadError: error, isUploading: false }))
		})
	};

	changeFile = event => {
		const file = event.target.files[0];
		this.setState({ avatar: file })
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
			description: this.state.description
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
				<ValidatorForm
					instantValidate={false}
					onSubmit={this.updateInfo}
				>
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
							<TextValidator
								variant="outlined"
								className="account__form--input"
								label="Business Name"
								name="businessName"
								disabled={this.state.canNotEdit}
								value={this.state.businessName}
								onChange={this.changeHandler}
								validators={['required', 'minStringLength:2']}
								errorMessages={['this field is required', 'The length must longer than 2']}
							/>
							<TextValidator
								variant="outlined"
								className="account__form--input"
								label="ABNNumber"
								name="ABNNumber"
								margin="normal"
								disabled={this.state.canNotEdit}
								value={this.state.ABNNumber}
								onChange={this.changeHandler}
								validators={[
									'required', 
									'matchRegexp:^[0-9]{11}$'
								]}
								errorMessages={[
									'this field is required', 
									'ABN is not valid'
								]}
							/>
							<TextField
								variant="outlined"
								className="account__form--input-description"
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

					<h5>Upload Your Avatar</h5>
					<div className="account__form--container">
						<div className="account__form--avatar">
							<input
								className="account__form--avatar-file"
								type="file"
								name="avatar"
								onChange={this.changeFile}
								disabled={this.state.canNotEdit}
							/>
							{this.state.isUploading ? 
								<CircularProgress size={50} color="secondary" /> :
								(<Button
									className="account__form--avatar-upload"
									variant="contained"
									onClick={this.handleUpload}
									disabled={this.state.canNotEdit}
								>
									Upload
								</Button>)
							}

							{!!this.state.uploadError && (
								<Alert
									severity="error"
									className="account__form--error"
								>
									Upload fail, please try again.
								</Alert>
							)}
						</div>
					</div>

					<h5>Contact Details</h5>
					<div className="account__form--contact">
						<TextValidator
							variant="outlined"
							className="account__form--input"
							label="Contact Number"
							name="contactNumber"
							disabled={this.state.canNotEdit}
							value={this.state.contactNumber}
							onChange={this.changeHandler}
							validators={[
								'required', 
								'matchRegexp:^[0-9]{10}$'
							]}
							errorMessages={[
								'this field is required', 
								'phone number is not valid'
							]}
						/>
						<TextValidator
							variant="outlined"
							className="account__form--input"
							label="Email Address"
							name="email"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.email}
							onChange={this.changeHandler}
							validators={["required", "isEmail"]}
							errorMessages={[
								"this field is required",
								"email is not valid"
							]}
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
						<TextValidator
							variant="outlined"
							className="account__form--input"
							label="Postcode"
							name="postcode"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.postcode}
							onChange={this.changeHandler}
							validators={["required", "matchRegexp:^[0-9]{4}$"]}
							errorMessages={[
								"this field is required",
								"postcode is not valid"
							]}
						/>
					</div>
					<div className="account__form--button">
						{!this.state.updateButtonHidden ? (
							<Button
								variant="contained"
								color="primary"
								type="submit"
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
				</ValidatorForm>
			);
		}
	};

	render() {
		return (
			<div className="business-account__form">
				<Fragment>
					<h1 className="account__form--header">Account</h1>
					{this.renderContent()}
				</Fragment>
			</div>
		);
	}
}

export default Account;
