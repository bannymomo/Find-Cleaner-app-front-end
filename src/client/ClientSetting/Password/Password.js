import React, { Component, Fragment } from 'react';
import { TextField, Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import './style/password.scss'

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
class Password extends Component {

  state = {
    oldPassword: '',
    newPassword: '',
    doublecheckPassword: '',
  }

  changePassword = () => {
    console.log('Done')
    console.log(this.state)
  }

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
        <div className="password__form">
          <ul>
            <li><TextField
              variant="outlined" required label="Old Password" fullWidth
              value={this.state.oldPassword}
              onChange={(event) => this.setState({ oldPassword: event.target.value })}
            /></li>
            <li><TextField
              variant="outlined" required label="New Password" fullWidth
              value={this.state.newPassword}
              onChange={(event) => this.setState({ newPassword: event.target.value })}
            /></li>
            <li><TextField
              variant="outlined" required label="Repeat Password" fullWidth
              value={this.state.doublecheckPassword}
              onChange={(event) => this.setState({ doublecheckPassword: event.target.value })}
            /></li>
            <li><Button variant="contained" color="primary"
              onClick={this.changePassword}>DONE</Button></li>
          </ul>
        </div>
        </ThemeProvider>
      </Fragment>
    )
  }

}

export default Password
