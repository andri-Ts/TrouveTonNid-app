import React, { useState } from 'react';
import './searchBar.scss';
import { Link } from 'react-router-dom';

const transactions = ['Buy', 'rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    transaction: 'BUY',
    city: '',
    minPrice: 0,
    maxPrice: 0,
  });

  // Permet de changer le type d'opération (achat / location).
  // On met à jour l'objet en préservant les autres champs
  const switchType = (value) => {
    setQuery((prevValue) => ({ ...prevValue, transaction: value }));
  };

  // Fonc appelée à chaque fois qu'on tape dans un input
  const handleChange = (e) => {
    const { name, value } = e.target; // e.targer.name = "city" ou "minPrince", etc.. | e.target.value = valeur tapée par l'utilisateur

    setQuery((prev) => ({
      ...prev, // on garde les anciennes valeurs
      [name]: value, // on met à jour UNIQUEMENT le champ modifié
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="searchBar">
      <div className="type">
        {transactions.map((type) => (
          // Compare la valeur actuelle du state et la valeur du bouton en cours de rendu, si =, on applique "active"
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.transaction === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City Location"
          value={query.city}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleChange}
        />
        <Link
          to={`/list/?transaction=${query.transaction}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="./search.png" alt="Search" />
          </button>
        </Link>
      </form>
    </section>
  );
}

export default SearchBar;
