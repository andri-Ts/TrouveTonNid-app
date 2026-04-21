import { useContext, useState } from 'react';
import apiRequest from '../../lib/apiRequest';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false); // pour activé ou désactivé le bouton Login
  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext); // récup de la fonciton updateUser (pour avoir les data) via le Provider

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMsg(''); // enlève le msg d'erreur au dessous du bouton

    const formData = new FormData(event.target);
    const username = formData.get('username-form');
    const password = formData.get('password-form');

    // Récupérer les données de l'user (avec le Context)
    try {
      const res = await apiRequest.post('/auth/login', { username, password });
      // localStorage.setItem('user', JSON.stringify(res.data)); // transforme la réponse du back en string et le stock dans le navigateur
      updateUser(res.data); // les données sont dans .data
      navigate('/');
    } catch (error) {
      setErrorMsg(error.response.data.message || 'Something went wrong'); // afficher l'error venant du back sur l'écran
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username-form"
            required
            type="text"
            placeholder="Username"
          />
          <input
            name="password-form"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {errorMsg && <span>{errorMsg}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
}

export default Login;
