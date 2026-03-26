import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './layout.scss';

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

export default Layout;
