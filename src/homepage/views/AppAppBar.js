import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { LOGIN_URL, HOMEPAGE_URL, SIGNUP_URL } from "../../routes/URLMap";
import { Link } from "react-router-dom";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 30 + "px",
              fontWeight: "bold"
            }}
            to={HOMEPAGE_URL}
          >
            Find Cleaner
          </Link>
          <div className={classes.right}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 20 + "px",
                fontWeight: "bold",
                margin: 10 + "px"
              }}
              to={LOGIN_URL}
            >
              LOG IN
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 20 + "px",
                fontWeight: "bold",
                margin: 10 + "px "
              }}
              to={SIGNUP_URL}
            >
              SIGN UP
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ height: 60 + "px" }} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
