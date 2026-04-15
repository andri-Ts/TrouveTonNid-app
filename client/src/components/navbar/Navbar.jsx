import React, { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <nav>
      <section className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="LOGO" />
          <span>Trouve Ton Nid</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </section>
      <section className="right">
        {currentUser ? (
          <section className="user">
            <div className="user-name">
              <img src={currentUser.avatar || '/no-avatar.jpg'} alt="profile" />
              <p className="name">{currentUser.username}</p>
              {/* <p className="name">MY NAME</p> */}
            </div>
            <Link to={'/profile-page'} className="profile">
              <p>Profile</p>
              <span className="notification">3</span>
            </Link>
          </section>
        ) : (
          <>
            <a href="/login">Sign in</a>
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
