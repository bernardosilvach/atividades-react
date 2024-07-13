import React from 'react';
import './App.css';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicação de Login</h1>
        <Login />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
