import { useState } from 'react';
import apiRequest from '../../lib/apiRequest';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // pour activé ou désactivé le bouton Login

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(''); // enlève le msg d'erreur au dessous du bouton

    const formData = new FormData(event.target);
    const username = formData.get('username-form');
    const password = formData.get('password-form');

    try {
      const res = await apiRequest.post('/auth/login', { username, password });
      console.log(res);
    } catch (error) {
      setError(error.response.data.message);
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
          {error && <span>{error}</span>}
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
