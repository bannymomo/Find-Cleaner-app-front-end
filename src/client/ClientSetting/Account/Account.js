import React, { Fragment, Component } from "react";
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { updateClientById, fetchClientById } from '../../../api/client';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Alert from "@material-ui/lab/Alert";

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
  constructor(props) {
    super(props);

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    this.state = {
      defaultValue: {
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
      },
      firstName: '',
      lastName: '',
      birthday: minDate,
      location: '',
      email: '',
      contactNumber: '',
      isLoading: false,
      error: null,
      canNotEdit: true
    }
  }

  componentDidMount() {
    this.updateDefaultValue();
  }

  updateDefaultValue = () => {
    const clientID = this.props.match.params.clientId;
    fetchClientById(clientID).then(
      data => {
        this.setState({
          defaultValue: {
            firstName: data.firstName,
            lastName: data.lastName,
            // need to be changed
            contactNumber: data.description,
            email: data.email,
            // need to be changed
            location: data.postcode,
          }
        })
      }
    )
  }


  handleDateChange = (event, date) => {
    this.setState({
      birthday: date,
    });
    console.log(this.state.birthday);
  };

  changeHandler = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  }

  disableEdit = () => {
    this.setState({ canNotEdit: !this.state.canNotEdit })
  }

  updateInfo = () => {
    const clientInfo = {
      firstName: this.state.firstName === "" ? 
      this.state.defaultValue.firstName : this.state.firstName,
      lastName: this.state.lastName  === "" ?
      this.state.defaultValue.lastName : this.state.lastName,
      gender: 'male',
      email: this.state.email === "" ?
      this.state.defaultValue.email : this.state.email,
      postcode: 12345,
      // need to be changed
      description: this.state.contactNumber === "" ?
      this.state.defaultValue.contactNumber : this.state.contactNumber
    };
    const clientID = this.props.match.params.clientId;
    this.setState({ isLoading: true }, () => {
      updateClientById(clientID, clientInfo)
        .then(data => {
          this.setState({isLoading: false, canNotEdit: true}, ()=> {
            this.updateDefaultValue();
          })
        })
        .catch(error => this.setState({ error, isLoading: false }));
    });
  }

  render() {

    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <h3>Account</h3>
          <h5>Personal Details</h5>
          <div className="account__form--container">
            <div className="account__form--edit">
              <Button variant="outlined" onClick={this.disableEdit}>Edit</Button>
            </div>
            <div className="account__form--personal">
              <TextField variant="outlined" className="account__form--input"
                label="First Name" name="firstName" disabled={this.state.canNotEdit}
                value={this.state.canNotEdit ?
                  this.state.defaultValue.firstName : this.state.firstName
                } onChange={this.changeHandler} />
              <TextField variant="outlined" className="account__form--input"
                label="Last Name" name="lastName" margin="normal" disabled={this.state.canNotEdit}
                value={this.state.canNotEdit ?
                  this.state.defaultValue.lastName : this.state.lastName
                } onChange={this.changeHandler} />
              <KeyboardDatePicker className="account__form--input" disabled={this.state.canNotEdit}
                disableToolbar variant="inline" format="MM/dd/yyyy" margin="normal"
                id="date-picker-inline" label="Birthday" value={this.state.birthday}
                onChange={this.handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date' }}
                disabled={this.state.canNotEdit}
              />
            </div>
          </div>

          <h5>Contact Details</h5>
          <div className="account__form--contact">

            <TextField variant="outlined" className="account__form--input"
              label="Contact Number" name="contactNumber" disabled={this.state.canNotEdit}
              value={this.state.canNotEdit ?
                this.state.defaultValue.contactNumber : this.state.contactNumber
              } onChange={this.changeHandler} />
            <TextField variant="outlined" className="account__form--input"
              label="Email Address" name="email" margin="normal" disabled={this.state.canNotEdit}
              value={this.state.canNotEdit ?
                this.state.defaultValue.email : this.state.email
              } onChange={this.changeHandler} />
            <TextField variant="outlined" className="account__form--input"
              label="Current Residential Address" name="location" margin="normal"
              disabled={this.state.canNotEdit} 
              value={this.state.location
              } onChange={this.changeHandler}/>
          </div>
          <div className="account__from--button">
            {this.state.isLoading ? <CircularProgress /> :
              (<Button variant="contained" color="primary"
                onClick={this.updateInfo}>UPDATE</Button>)}
            {!!this.state.error && (
              <Alert severity="error" className="account__form--error">
                Update fail, please try again.
											</Alert>
            )}
          </div>
        </ThemeProvider>
      </Fragment>
    )
  }
};

export default Account;
