import React, { Component, Fragment } from "react";
import { TextField, Button, LinearProgress } from "@material-ui/core";
import { changePasswordById, getUserId } from '../../api/auth';
import Alert from "@material-ui/lab/Alert";
import "./style/password.scss";

class Password extends Component {
	state = {
		oldPassword: "",
		newPassword: "",
		doublecheckPassword: "",
		isLoading: false,
		error: null,
		isFinished: false,
		errorMessage: ""
	};
	changePassword = () => {

		const passwordInfo = {
			oldPassword: this.state.oldPassword,
			newPassword: this.state.newPassword,
			doublecheckPassword: this.state.doublecheckPassword
		}
		this.setState({ isFinished: false, isLoading: true, error: null }, () => {
			getUserId().then(userID => {
				changePasswordById(userID, passwordInfo).then(res => {
					this.setState({ isLoading: false, isFinished: true })
				})
					.catch(error => {
						this.setState({
							error, isLoading: false,
							errorMessage: error.response.data.message
						})
					})
			}).catch(error => this.setState({ error, isLoading: false }))
		});
	};

	render() {
		return (
			<Fragment>
				<h3 className="password__form--header">Password</h3>
				<div className="password__form">
					<ul>
						<li>
							<TextField
								variant="outlined"
								required
								label="Old Password"
								fullWidth
								value={this.state.oldPassword}
								onChange={event =>
									this.setState({
										oldPassword: event.target.value
									})
								}
							/>
						</li>
						<li>
							<TextField
								variant="outlined"
								required
								label="New Password"
								fullWidth
								value={this.state.newPassword}
								onChange={event =>
									this.setState({
										newPassword: event.target.value
									})
								}
							/>
						</li>
						<li>
							<TextField
								variant="outlined"
								required
								label="Repeat Password"
								fullWidth
								value={this.state.doublecheckPassword}
								onChange={event =>
									this.setState({
										doublecheckPassword: event.target.value
									})
								}
							/>
						</li>
						<li> {this.state.isLoading ?
							<LinearProgress />
							:
							<Button
								variant="contained"
								color="primary"
								onClick={this.changePassword}
							>
								DONE
							</Button>}
						</li>
						<li>{this.state.isFinished &&
							<Alert severity="info"> Successful</Alert>
						}
							{!!this.state.error && (
								<Alert
									severity="error"
								>
									{this.state.errorMessage}
								</Alert>
							)}
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
}

export default Password;
