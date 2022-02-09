import React, { useContext, useEffect, useRef } from 'react';
import LocationsList from '../components/Locations/LocationsList';
import SearchForm from '../components/SearchForm';
import useHttp from '../hooks/use-http';
import LocationContext from '../store/location-context';

export default function Homepage() {
  const mounted = useRef();
  useEffect(() => {
    console.log('home component mounted');
    return () => {
      console.log('home unmounted');
    };
  }, []);

  const { searchInputValue, searchResultsHandler } =
    useContext(LocationContext);

  const { sendRequest } = useHttp();

  useEffect(() => {
    mounted.current = true;
    const getLocations = ({ locations }) => searchResultsHandler(locations);
    const identifier = setTimeout(() => {
      sendRequest('search', searchInputValue, getLocations);
    }, 500);
    return () => {
      clearTimeout(identifier);
      mounted.current = false;
    };
  }, [sendRequest, searchInputValue, searchResultsHandler]);
  return (
    <>
      <SearchForm />
      <LocationsList />
    </>
  );
}
