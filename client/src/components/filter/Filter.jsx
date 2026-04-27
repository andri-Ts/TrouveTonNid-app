import React, { useState } from 'react';
import './filter.scss';
import { useSearchParams } from 'react-router-dom';

// *** Autre façon de faire un filtre! (FILTRE DYNAMIQUE qui doit survivre à un refresh)

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams(); // récupère le query dans le req (bare url)
  const [query, setQuery] = useState({
    transaction: searchParams.get('transaction') || '',
    city: searchParams.get('city') || '',
    property: searchParams.get('property') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedroom: searchParams.get('bedroom') || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // contient la valeur tapé par l'utilisateur
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    setSearchParams(query); // transfome l'objet query en URL (met directement dans l'url sans navigate, form)
  };

  return (
    <section className="filter">
      <h1>
        Search results for <b>{query.city}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city-id">Location</label>
          <input
            type="text"
            name="city"
            id="city-id"
            placeholder="City location"
            onChange={handleChange}
            value={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type-id">Type</label>
          <select
            name="type"
            id="type-id"
            onChange={handleChange}
            value={query.transaction}
          >
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="apartment-id">Apartment</label>
          <select
            name="apartment"
            id="apartment-id"
            onChange={handleChange}
            value={query.property}
          >
            <option value="any">any</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice-id">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice-id"
            placeholder="any"
            onChange={handleChange}
            value={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice-id">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice-id"
            placeholder="any"
            onChange={handleChange}
            value={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom-id">Bedroom</label>
          <input
            type="number"
            name="bedroom"
            id="bedroom-id"
            placeholder="any"
            onChange={handleChange}
            value={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </section>
  );
}

export default Filter;
