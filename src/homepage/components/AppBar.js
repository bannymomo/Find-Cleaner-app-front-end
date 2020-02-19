import React from "react";
import PropTypes from "prop-types";
import MuiAppBar from "@material-ui/core/AppBar";
import "../../theme/color.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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

function AppBar(props) {
  return (
    <ThemeProvider theme={theme}>
      <MuiAppBar color="primary" elevation={0} position="static" {...props} />
    </ThemeProvider>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AppBar;
