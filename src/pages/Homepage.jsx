import React from 'react';
import LocationsList from '../components/Locations/LocationsList';
import SearchForm from '../components/SearchForm';

export default function Homepage() {
  return (
    <div className="container">
      <div className="container">
        <img
          src="https://developer.foreca.com/static/images/symbols/d000.png"
          alt=""
        />
        <h1>OR Weather App</h1>
      </div>
      <SearchForm />
      <LocationsList />
    </div>
  );
}
