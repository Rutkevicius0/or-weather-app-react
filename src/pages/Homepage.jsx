import React from 'react';
import LocationsList from '../components/Locations/LocationsList';
import SearchForm from '../components/SearchForm';

export default function Homepage() {
  return (
    <>
      <SearchForm />
      <LocationsList />
    </>
  );
}
