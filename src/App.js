import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Navigation from "./navigation/Navigation";
import Routes from "./routes/Routes";
import "./App.scss";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App" style={{ backgroundColor: "#f5f6fd" }}>
        <Navigation />
        <main className="App__container--whole-page">
          <Routes />
        </main>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
