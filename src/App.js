import React from 'react';
//import logo from './logo.svg';
import './App.css';

const App = (Props) => (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Count = {Props.count}
        </p>
      </header>
    </div>
)

export default App;
