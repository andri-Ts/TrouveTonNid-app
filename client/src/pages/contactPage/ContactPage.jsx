import React, { useState } from 'react';
import './contactPage.scss';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Message envoyé :', formData);

    // Ici tu pourras appeler ton API plus tard
    alert('Message envoyé !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contactPage">
      <div className="container">
        <h1>Contact</h1>
        <p>Une question ? Une suggestion ? Envoie-moi un message.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Ton message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
