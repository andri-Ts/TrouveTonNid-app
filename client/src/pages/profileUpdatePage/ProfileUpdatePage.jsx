import React, { useContext, useState } from 'react';
import './profileUpdatePage.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

function ProfileUpdatePage() {
  const [errorMsg, setErrorMsg] = useState('');
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username_data, email_data, password_data } =
      Object.fromEntries(formData); // autre manières de récup data dans formData

    // Update les données de l'user
    try {
      const updateRes = await apiRequest.put(`/users/${currentUser._id}`, {
        username: username_data,
        email: email_data,
        password: password_data,
      });
      updateUser(updateRes);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response?.data?.message || 'Something went wrong'); // error.response... : structure des erreurs envoyés par le backend
    }
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
              name="username_data"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email_data"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password_data" type="password" />
          </div>
          <button>Update</button>
          {errorMsg && <span>{errorMsg}</span>}
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
