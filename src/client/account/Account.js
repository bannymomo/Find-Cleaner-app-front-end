import React, { Fragment, Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { updateClientById, fetchClientById, updateAvatar } from "../../api/client";
import Alert from "@material-ui/lab/Alert";
import "./style/account.scss";

class Account extends Component {
	constructor(props) {
		super(props);
		const minDate = new Date();
		minDate.setFullYear(minDate.getFullYear() - 1);
		minDate.setHours(0, 0, 0, 0);
		this.state = {
			firstName: "",
			lastName: "",
			birthday: minDate,
			postcode: "",
			// location: "",
			email: "",
			contactNumber: "",
			avatar: null,

			isLoading: false,
			isUpdating: false,
			isUploading: false,
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
		const clientID = this.props.match.params.clientId;
		this.setState({ isLoading: true });
		fetchClientById(clientID)
			.then(data => {
				this.setState({
					firstName: data.firstName,
					lastName: data.lastName,
					contactNumber: data.description,
					email: data.email,
					postcode: data.postcode,
					// location: data.postcode,
					isLoading: false
				});
			})
			.catch(error => this.setState({ error, isLoading: false }));
	};

	handleUpload = () => {
		const clientId = this.props.match.params.clientId;
		const avatar = this.state.avatar;
		const data = new FormData();
		data.append('avatar', avatar);
		console.log(avatar);
		console.log(data);
		this.setState({ isUploading: true }, () => {

			updateAvatar(clientId, data)
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

	changeHandler = event => {
		const key = event.target.name;
		const value = event.target.value;
		this.setState({ [key]: value });
	};

	changeFile = event => {
		const file = event.target.files[0];
		this.setState({ avatar: file })
	};

	disableEdit = () => {
		this.setState({
			canNotEdit: false,
			updateButtonHidden: false,
			editButtonHidden: true
		});
	};

	updateInfo = () => {
		const clientInfo = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			gender: "male",
			email: this.state.email,
			postcode: this.state.postcode,
			description: this.state.contactNumber
		};
		const clientID = this.props.match.params.clientId;
		this.setState({ isUpdating: true }, () => {
			updateClientById(clientID, clientInfo)
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
					<h5>Personal Details</h5>
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
								label="First Name"
								name="firstName"
								disabled={this.state.canNotEdit}
								value={this.state.firstName}
								onChange={this.changeHandler}
								validators={["required", "minStringLength:2"]}
								errorMessages={[
									"this field is required",
									"The length must longer than 2"
								]}
							/>
							<TextValidator
								variant="outlined"
								className="account__form--input"
								label="Last Name"
								name="lastName"
								margin="normal"
								disabled={this.state.canNotEdit}
								value={this.state.lastName}
								onChange={this.changeHandler}
								validators={["required", "minStringLength:2"]}
								errorMessages={[
									"this field is required",
									"The length must longer than 2"
								]}
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
						<TextField
							variant="outlined"
							className="account__form--input"
							label="Contact Number"
							name="contactNumber"
							disabled={this.state.canNotEdit}
							value={this.state.contactNumber}
							onChange={this.changeHandler}
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
						<TextValidator
							variant="outlined"
							className="account__form--input"
							label="Current Residential Postcode"
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
			<div className="client-account__form">
				<Fragment>
					<h3 className="account__form--header">Account</h3>
					{this.renderContent()}
				</Fragment>
			</div>
		);
	}
}

export default Account;
