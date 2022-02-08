import React from 'react';
import LocationsList from './Locations/LocationsList';
import SearchForm from './SearchForm';

export default function SearchBox() {
  return (
    <>
      <SearchForm />
      <LocationsList />
    </>
  );
}
