import React, { Component } from 'react';
import { Button, Grid, TextField, Container, CssBaseline, Typography, withStyles
,Box, createMuiTheme, ThemeProvider, Avatar}
  from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import { BUSINESS_BASE_URL } from '../../../routes/URLMap'
// import {createClient} from '../../api/client'

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
    height:"60vh",
    width:"60vh",
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
    this.props.history.replace(`${BUSINESS_BASE_URL}`);
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <Box className={classes.box}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            More about you~
          </Typography>
          <Avatar className={classes.avatar}>
                <AssignmentIndIcon />
              </Avatar>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
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
                <TextField variant="filled" required fullWidth label="Gender"
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
    )
  }
}

export default withStyles(styles)(MoreInfo);