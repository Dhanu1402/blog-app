import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <main className="p-10 max-w-screen-md my-0 mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}
