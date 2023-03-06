import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

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
