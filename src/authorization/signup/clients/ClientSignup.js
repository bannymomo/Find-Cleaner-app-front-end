import React, { Component } from 'react';
import {
  Button, Grid, TextField, Container, CssBaseline, Typography, withStyles
  , Box, createMuiTheme, ThemeProvider
}
  from '@material-ui/core';
import Background from '../../../assets/images/auth-background.jpg'
import { CLIENT_BASE_URL } from '../../../routes/URLMap'
import logo from '../../../assets/images/logo.png';
import brandName from '../../../assets/images/brandname.png';
import '../style/signup.scss';

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
    paddingTop: '15vh',
    height: '100vh',
  },
  backGround: {
    backgroundImage: `url(${Background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FBFCFF',
    borderRadius: '10px',
    height: '50vh'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  grid: {
    marginTop: theme.spacing(1)
  }
});

class MoreInfo extends Component {

  state = {
    firstName: '',
    lastName: '',
    postcode: '',
    gender: '',
    invalidName: false
  }

  postClient = () => {
    // if (this.state.firstName.length < 2 && this.state.lastName.length < 2)  {
    //     this.setState({invalidName: true})
    //     return;
    // }
    // const clientInfo= {
    //     firstName: this.state.firstName,
    //     lastName:this.state.lastName,
    //     gender:this.state.gender,
    //     email:this.props.email,
    //     postcode:this.state.postcode
    // }
    // createClient(clientInfo).then( data => {
    //   const clientId = data._id;
    //   const redirectTo = `${CLIENT_BASE_URL}/${clientId}`;
    //   this.props.history.replace(redirectTo);
    // });
    this.props.history.replace(`${CLIENT_BASE_URL}`);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.backGround}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />

          <Box className={classes.box}>
            <div className={classes.paper}>
              <div className="signUp__logo">
                <img className="signUp__logo--pic" src={logo} alt="logo" />
                <img className="signUp__logo--font" src={brandName} alt="brandname" />
              </div>
              <form className={classes.form} noValidate>
              <label>More about you~</label>
                <Grid container spacing={2} className={classes.grid}>
                  <Grid item xs={12} sm={6}>
                    <TextField variant="outlined" required fullWidth label="First Name"
                      value={this.state.firstName}
                      onChange={(event) => this.setState({ firstName: event.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField variant="outlined" required fullWidth label="Last Name"
                      value={this.state.lastName}
                      onChange={(event) => this.setState({ lastName: event.target.value })} />
                  </Grid>
                  {this.state.invalidName ?
                    <Typography variant="h5" color='secondary'>
                      The length of name must be longer than 2
            </Typography> : null}
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth label="Gender"
                      value={this.state.gender}
                      onChange={(event) => this.setState({ gender: event.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField color='primary'
                      variant="outlined" required fullWidth label="postcode"
                      value={this.state.postcode}
                      onChange={(event) => this.setState({ postcode: event.target.value })}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  fullWidth color="primary" className={classes.submit}
                  onClick={this.postClient}
                >Sign up
            </Button>
              </form>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(MoreInfo);