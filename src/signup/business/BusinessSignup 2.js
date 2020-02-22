import React, { Component} from 'react';
import { Button, Grid, TextField, Container, CssBaseline, Typography, withStyles }
  from '@material-ui/core';

// import { CLIENT_BASE_URL } from '../../routes/URLMap'
// import {createClient} from '../../api/client'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& TextField': {
      backgroundColor: 'red',
    }
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            More about you~
        </Typography>
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
                onChange={(event) => this.setState({ lastName: event.target.value })}/>
            </Grid>
            {this.state.invalidName?  
            <Typography  variant="h5" color='secondary'>
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
              > 
            lalala
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(MoreInfo);