import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between mb-16 mt-2 items-center">
      <Link to={'/'} className="font-bold text-2xl">
        BloggingAdda
      </Link>
      <nav className="flex gap-4">
        <Link to={'/developers'}>Developers</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </nav>
    </header>
  );
}
