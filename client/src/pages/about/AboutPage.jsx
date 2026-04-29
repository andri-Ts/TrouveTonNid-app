import React from 'react';
import './aboutPage.scss';

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="container">
        <h1>À propos de TrouveTonNid</h1>

        <p>
          TrouveTonNid est une application web permettant de rechercher des
          biens immobiliers à acheter ou à louer facilement, grâce à des filtres
          simples et une interface intuitive.
        </p>

        <p>
          Ce projet a été développé dans un but éducatif afin de pratiquer la
          stack MERN (MongoDB, Express, React, Node.js) ainsi que
          l’authentification JWT et la gestion d’API REST.
        </p>

        <p>
          L’objectif est de simuler une plateforme réaliste de recherche
          immobilière avec une expérience utilisateur fluide.
        </p>

        <div className="infoBox">
          <h3>Stack utilisée</h3>
          <ul>
            <li>React</li>
            <li>Node.js / Express</li>
            <li>MongoDB</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
