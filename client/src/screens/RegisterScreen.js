import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    // prevent the page from refreshing
    ev.preventDefault();
    // sending post request
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      // if having any cookie it will included to our browser
      credentials: 'include',
    });
    if (response.status === 200) {
      alert('Registration successful');
      setRedirect(true);
    } else {
      alert('Registration failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <form action="" className="max-w-md my-0 mx-auto" onSubmit={register}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
