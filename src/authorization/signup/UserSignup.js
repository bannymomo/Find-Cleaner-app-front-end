import React, { Component } from 'react';
import { Button, Grid, TextField, Container, CssBaseline, Typography, 
  withStyles, Box, createMuiTheme, ThemeProvider,Avatar  }
  from '@material-ui/core';
  import LockOpenIcon from '@material-ui/icons/LockOpen';

// import { signup as signupFn } from '../api/auth';
// import { setToken } from '../utils/auth';
import ClientSignup from './clients/ClientSignup';
import BusinessSignup from './business/BusinessSignup'

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

const styles = theme => ({
  container: {
    height:'85vh',
    marginTop:'15vh',
  },
  box:{
    height:"55vh",
    width:"50vh",
  },
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'100%',
    backgroundColor: '#FEFEFF'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2196f3'
  }
});

class User extends Component {

  state = {
    email: '',
    username: '',
    password: '',
    history: '',
    role: this.props.location.role
  }

  postUserInfo = () => {
    // const userInfo = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   role: this.state.role
    // }
    // console.log(userInfo)
    // signupFn(userInfo)
    //   .then(data => {
    //     this.setState({ basicInfo: true }, () => {
    //       setToken(data.token)
    //       this.setState({ history: this.props.history })
    //     });
    //   })
    this.setState({ basicInfo: true, history: this.props.history })
  }

  render() {
    const { classes } = this.props;

    return (
      !this.state.basicInfo ? (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Box className={classes.box}>
          <div className={classes.paper}>
          <Avatar className={classes.avatar}>
                <LockOpenIcon />
              </Avatar>
            <Typography component="h1" variant="h3">
              Sign up
        </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="filled" required fullWidth label="User Name"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="filled" required fullWidth label="Email Address"
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField color='secondary'
                    variant="outlined" required fullWidth label="Password" type="password"
                    value={this.state.password}
                    onChange={(event) => this.setState({ password: event.target.value })}
                  />
                </Grid>
              </Grid>
              <Button
                onClick={() => this.postUserInfo()} variant="contained"
                fullWidth color="primary" className={classes.submit}>
                Continue
            </Button>
            </form>
          </div>
          </Box>
        </Container>
        </ThemeProvider>) :
        (this.state.role === 'client' ?
          <ClientSignup
            email={this.state.email}
            history={this.state.history} /> :
          <BusinessSignup
            email={this.state.email}
            history={this.state.history} />)
    )
  }
}

export default withStyles(styles)(User);