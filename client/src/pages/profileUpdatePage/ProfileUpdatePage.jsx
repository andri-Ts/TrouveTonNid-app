import React, { useContext } from 'react';
import './profileUpdatePage.scss';
import { AuthContext } from '../../context/AuthContext';

function ProfileUpdatePage() {
  const { currentUser, udpateUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    console.log('submit');
  };

  return (
    <section className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {/* {error && <span>error</span>} */}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={currentUser.avatar || '/no-avatar.jpg'}
          alt=""
          className="avatar"
        />
      </div>
    </section>
  );
}

export default ProfileUpdatePage;
