import React, { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <section className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="LOGO" />
          <span>Trouve Ton Nid</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Agents</Link>
      </section>
      <section className="right">
        {currentUser ? (
          <section className="user">
            <div className="user-name">
              <img src={currentUser.avatar || '/no-avatar.jpg'} alt="profile" />
              <p className="name">{currentUser.username}</p>
            </div>
            <Link to={'/profile-page'} className="profile">
              <p>Profile</p>
              <span className="notification">3</span>
            </Link>
          </section>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}
        {/* menu sur mobile */}
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
          <Link href="/login">Sign in</Link>
          <Link href="/sign-up" className="register">
            Sign up
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
