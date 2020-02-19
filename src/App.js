import React from "react";

import Navigation from "./navigation/Navigation";
import Routes from "./routes/Routes";
import "./App.scss";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f5f6fd" }}>
      <Navigation />
      <main className="App__container--whole-page">
        <Routes />
      </main>
    </div>
  );
}

export default App;
