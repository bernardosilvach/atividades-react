import React from 'react';
import './App.css';
import Factorial from './components/Factorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Fatorial</h1>
        <Factorial />
      </header>
    </div>
  );
}

export default App;