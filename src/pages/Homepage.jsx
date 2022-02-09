import React from 'react';
import LocationsList from '../components/Locations/LocationsList';
import SearchForm from '../components/SearchForm';

export default function Homepage() {
  return (
    <div className="container-trans">
      <div className="container mb-3 d-flex justify-content-center">
        <img
          style={{ width: '4rem' }}
          src="https://developer.foreca.com/static/images/symbols/d000.png"
          alt=""
        />
        <h1 className="ms-3 align-self-center text-secondary">
          OR Weather App
        </h1>
      </div>
      <SearchForm />
      <LocationsList />
    </div>
  );
}
