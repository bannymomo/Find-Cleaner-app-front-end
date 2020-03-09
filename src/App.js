import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Routes from "./routes/Routes";
import "./App.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#3f88de"
		},
		secondary: {
			main: "#f5f6fd"
		}
	}
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className="app">
					<main className="app__container--whole-page">
						<Routes />
					</main>
				</div>
			</MuiPickersUtilsProvider>
		</MuiThemeProvider>
	);
}

export default App;
