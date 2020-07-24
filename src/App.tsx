import React from 'react';
import logo from './logo.svg';
import './App.css';

import Survey from './components/Survey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Codementor verification test</h1>
      </header>
      <section>
        <Survey />
      </section>
    </div>
  );
}

export default App;
