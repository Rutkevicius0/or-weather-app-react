import { useState, useEffect, useContext } from 'react';
import './App.css';
import useHttp from './hooks/use-http';
import SearchForm from './components/SearchForm';
import LocationsList from './components/Locations/LocationsList';
import LocationContext from './store/location-context';
import SingleLocationItem from './components/Locations/SingleLocation/SingleLocationItem';
import SearchBox from './components/SearchBox';

function App() {
  const { searchInputValue, searchResultsHandler, singleLocationInfo } =
    useContext(LocationContext);

  const { sendRequest } = useHttp();

  useEffect(() => {
    const getLocations = ({ locations }) => searchResultsHandler(locations);
    const identifier = setTimeout(() => {
      sendRequest('search', searchInputValue, getLocations);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [sendRequest, searchInputValue, searchResultsHandler]);

  return (
    <div className="App">
      <SearchBox />
      {singleLocationInfo.id && <SingleLocationItem />}
    </div>
  );
}

export default App;
