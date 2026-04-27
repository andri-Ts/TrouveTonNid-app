import React, { useState } from 'react';
import './searchBar.scss';
import { Link, useNavigate } from 'react-router-dom';

const transactions = ['buy', 'rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    transaction: '',
    city: '',
    minPrice: 0,
    maxPrice: 0,
  });
  const navigate = useNavigate();

  // Permet de changer le type d'opération (achat / location).
  // On met à jour l'objet en préservant les autres champs
  const switchType = (value) => {
    setQuery((prevValue) => ({ ...prevValue, transaction: value }));
  };

  // Pour ne pas envoyer de paramètres inutiles
  const buildQuery = () => {
    const params = new URLSearchParams(); // sert à construire unu URL proprement

    // On ajoute chaqeu champ uniquement si elle est valide
    if (query.transaction) params.append('transaction', query.transaction); // ajoute dans l'URL: transaction=valeur (contenu dans query.transaciton)
    if (query.city && query.city.trim() !== '')
      params.append('city', query.city.trim());
    if (query.minPrice && Number(query.minPrice) > 0)
      params.append('minPrice', query.minPrice);
    if (query.maxPrice && Number(query.maxPrice) > 0)
      params.append('maxPrice', query.maxPrice);

    return params.toString(); // ex: 'city=Paris&minPrice=100
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
    e.preventDefault(); // empêche le reload

    const queryString = buildQuery();
    navigate(`/list?${queryString}`); // redirection vers les bons paramètres
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
      <form onSubmit={handleSubmit}>
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
        {/* <Link
          to={`/list/?transaction=${query.transaction}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        > */}
        <button type="submit">
          <img src="./search.png" alt="Search" />
        </button>
        {/* </Link> */}
      </form>
    </section>
  );
}

export default SearchBar;
