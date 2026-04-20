import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './layout.scss';
import { AuthContext } from '../../context/AuthContext';

function Layout() {
  return (
    <main className="layout">
      <section className="navbar">
        <Navbar />
      </section>
      <section className="content">
        {/* Outlet afficher la page correspondante à la route */}
        <Outlet />
      </section>
    </main>
  );
}

// layout à utiliser lorsqu'on n'est pas connécté (c'est à dire sur tous les pages)
function RequireAuthLayout() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="layout">
      <section className="navbar">
        <Navbar />
      </section>
      <section className="content">
        {/* Outlet afficher la page correspondante à la route */}
        <Outlet />
      </section>
    </main>
  );
}

export { Layout, RequireAuthLayout };
