import React from 'react';
import './App.css';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
