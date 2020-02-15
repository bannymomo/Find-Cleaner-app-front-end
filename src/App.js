import React from 'react';

import Navigation from './navigation/Navigation'
import Client from './client/Client'

function App() {
  return (
    <div className="App" style={{backgroundColor:"#f5f6fd"}}>
        <Navigation />
        <Client />
    </div>
  );
}

export default App;
