import React, { Fragment, Component } from "react";
import { TextField,Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import './style/account.scss';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2196f3"
		},
		secondary: {
			main: "#f50057"
		}
  }
});

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
        <ThemeProvider theme={theme}>
        <div className="account__form">
          <TextField variant="outlined" className="account__form--input"
            label="First Name" name="firstName"  margin="normal"
            value={this.state.firstName} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Last Name" name="lastName"  margin="normal"
            value={this.state.lastName} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Location" name="location"  margin="normal"
            value={this.state.location} onChange={this.changeHandler} />
          <TextField variant="outlined" className="account__form--input"
            label="Email" name="email" margin="normal"
            value={this.state.email} onChange={this.changeHandler} />
          <TextField label="Birthday" type="date" defaultValue="2017-05-24"
            margin="normal"
            className="account__form--input" InputLabelProps={{ shrink: true }} />
          <div className="account__from--button">
          <Button variant="contained" color="primary" 
              onClick={this.updateInfo}>DONE</Button>
          </div>
        </div>
        </ThemeProvider>
      </Fragment>
    )
  }
};

export default Account;
