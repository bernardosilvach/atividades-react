import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Você não está logado.</p>
      )}
    </div>
  );
}

export default UserProfile;