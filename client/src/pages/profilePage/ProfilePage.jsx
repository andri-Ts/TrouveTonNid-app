import React, { useContext } from 'react';
import List from '../../components/list/List';
import './profilePage.scss';
import Chat from '../../components/chat/Chat';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';

function ProfilePage() {
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post('/auth/logout');
      // localStorage.removeItem('user'); // supprime les données (token) de l'user dans le localStorage
      updateUser(null); // remplace le localStorage.remove
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profilePage">
      <section className="details">
        <div className="wrapper">
          <article className="my-infos">
            <header>
              <h2>User Information</h2>
              <div className="buttons">
                <button>Update profil</button>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </header>
            <div className="infos">
              <div className="info">
                <p>Avatar: </p>
                <img src={currentUser.avatar || '/no-avatar.jpg'} alt="pdp" />
              </div>
              <div className="info">
                <p>Username: </p>
                <p>{currentUser.username}</p>
              </div>
              <div className="info">
                <p>Email: </p>
                <p>{currentUser.email}</p>
              </div>
            </div>
          </article>
          <article className="my-list">
            <header>
              <h2>My List</h2>
              <button>Add New Post</button>
            </header>
            <List />
          </article>
        </div>
      </section>
      <section className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
