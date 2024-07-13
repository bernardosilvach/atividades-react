import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login(username);
    setUsername('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Nome de usuário" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
