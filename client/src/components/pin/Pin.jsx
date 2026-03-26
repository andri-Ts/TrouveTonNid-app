import React from 'react';
import { Link } from 'react-router-dom';
import { Marker, Popup } from 'react-leaflet';
import './pin.scss';

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <section className="popupContainer">
          <div className="imageContainer">
            <img src={item.img} alt="image" />
          </div>
          <div className="textContainer">
            <Link to={`/:${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </section>
      </Popup>
    </Marker>
  );
}

export default Pin;
