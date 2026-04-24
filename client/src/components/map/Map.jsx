import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/Pin';

function Map({ places }) {
  return (
    <MapContainer
      className="map"
      center={
        places.length === 1 // si le tab des coordonnées ne contiennent qu'un lieu (c-a-d singlePage)
          ? [places[0].latitude, places[0].longitude]
          : [52.4797, -1.90269] // sinon on met tout le pays en visible
      }
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Pin key={place.id} item={place} />
      ))}
    </MapContainer>
  );
}

export default Map;
