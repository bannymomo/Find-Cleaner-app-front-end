import React, { Fragment, Component } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { updateClientById, fetchClientById } from "../../api/client";
import { KeyboardDatePicker } from "@material-ui/pickers";
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

	handleDateChange = (event, date) => {
		this.setState({
			birthday: date
		});
		console.log(this.state.birthday);
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
				<Fragment>
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
							<TextField
								variant="outlined"
								className="account__form--input"
								label="First Name"
								name="firstName"
								disabled={this.state.canNotEdit}
								value={this.state.firstName}
								onChange={this.changeHandler}
							/>
							<TextField
								variant="outlined"
								className="account__form--input"
								label="Last Name"
								name="lastName"
								margin="normal"
								disabled={this.state.canNotEdit}
								value={this.state.lastName}
								onChange={this.changeHandler}
							/>
							<KeyboardDatePicker
								className="account__form--input"
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								label="Birthday"
								disabled={this.state.canNotEdit}
								value={this.state.birthday}
								onChange={this.handleDateChange}
								KeyboardButtonProps={{
									"aria-label": "change date"
								}}
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
							label="Current Residential Postcode"
							name="postcode"
							margin="normal"
							disabled={this.state.canNotEdit}
							value={this.state.postcode}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="account__form--button">
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
			);
		}
	};

	render() {
		return (
			<div className="account__form">
				<Fragment>
					<h3 className="account__form--header">Account</h3>
					{this.renderContent()}
				</Fragment>
			</div>
		);
	}
}

export default Account;
