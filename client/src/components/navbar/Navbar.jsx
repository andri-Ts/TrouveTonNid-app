import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <section className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="LOGO" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </section>
      <section className="right">
        {user ? (
          <section className="user">
            <div className="user-name">
              <img src="/profile.jpg" alt="profile" />
              <p className="name">John Doe</p>
            </div>
            <Link to={'/profile'} className="profile">
              <p>Profile</p>
              <span className="notification">3</span>
            </Link>
          </section>
        ) : (
          <>
            <a href="/sign-in">Sign in</a>
            <a href="/sign-up" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="MENU"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/sign-in">Sign in</a>
          <a href="/sign-up" className="register">
            Sign up
          </a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
