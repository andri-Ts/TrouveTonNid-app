import React, { useState } from 'react';
import './searchBar.scss';

const types = ['BUY', 'RENT'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'BUY',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  // Permet de changer le type d'opération (achat / location).
  // On met à jour l'objet en préservant les autres champs
  const switchType = (value) => {
    setQuery((prevValue) => ({ ...prevValue, type: value }));
  };

  return (
    <section className="searchBar">
      <div className="type">
        {types.map((type) => (
          // Compare la valeur actuelle du state et la valeur du bouton en cours de rendu, si =, on applique "active"
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="./search.png" alt="Search" />
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
