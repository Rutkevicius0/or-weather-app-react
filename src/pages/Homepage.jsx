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
