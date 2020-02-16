import React, { Fragment, Component } from "react";
import { TextField } from '@material-ui/core';

import './style/account.scss';

class Account extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthday: '',
    location: '',
    email: '',
    desciption: ''
  }

  changeHandler = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
    console.log(this.state)
  }

  updateInfo = () => {
    console.log('Done');
    console.log(this.state)
  }

  render() {
    return (
      <Fragment>
        <h3 className="account__header">Account</h3>
        <div className="account__form">
          <TextField variant="outlined" className="account__form--input"
            label="First Name" name="firstName" size="small" margin="normal"
            value={this.state.firstName} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Last Name" name="lastName" size="small" margin="normal"
            value={this.state.lastName} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Location" name="location" size="small" margin="normal"
            value={this.state.location} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Email" name="email" size="small" margin="normal"
            value={this.state.email} onChange={this.changeHandler} />
          <TextField label="Birthday" type="date" defaultValue="2017-05-24"
            margin="normal"
            className="account__form--input" InputLabelProps={{ shrink: true }} />
          <button onClick={this.updateInfo}>Save profile</button>
        </div>
      </Fragment>
    )
  }
};

export default Account;
