import React, { useState, useCallback } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = useCallback(() => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  }, [task]);

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Nova tarefa..." 
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
