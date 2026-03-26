import './registerPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await axios.post('http://localhost:8800/api/auth/register', {
        username,
        email,
        password,
      }); // post(url, data)

      // navigate('/login');
      console.log(res.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
}

export default RegisterPage;
