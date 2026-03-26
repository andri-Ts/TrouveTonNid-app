import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage() {
  return (
    <section className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            aperiam possimus obcaecati vitae modi suscipit illum dolorum rerum,
            inventore iusto!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <p>Years Experience</p>
            </div>
            <div className="box">
              <h2>200</h2>
              <p>Award Gained</p>
            </div>
            <div className="box">
              <h2>1200+</h2>
              <p>Proprety Ready</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="IMAGES" />
      </div>
    </section>
  );
}

export default HomePage;
