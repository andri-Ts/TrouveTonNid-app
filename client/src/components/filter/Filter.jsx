import React from 'react';
import './filter.scss';

function Filter() {
  return (
    <section className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city-id">Location</label>
          <input
            type="text"
            name="city"
            id="city-id"
            placeholder="City location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type-id">Type</label>
          <select name="type" id="type-id">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="apartment-id">Apartment</label>
          <select name="apartment" id="apartment-id">
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
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice-id">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice-id"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom-id">Bedroom</label>
          <input
            type="number"
            name="bedroom"
            id="bedroom-id"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </section>
  );
}

export default Filter;
