import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUsername(null);
  }

  return (
    <header className="flex justify-between mb-16 mt-2 items-center">
      <Link to={'/'} className="font-bold text-2xl">
        BloggingAdda
      </Link>
      <nav className="flex gap-4">
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link to={'/developers'}>Developers</Link>
            <Link to={'/'} onClick={logout}>
              Logout
            </Link>
          </>
        )}
        {!username && (
          <>
            <Link to={'/developers'}>Developers</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
