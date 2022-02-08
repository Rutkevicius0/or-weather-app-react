import { useState, useEffect, useContext } from 'react';
import './App.css';
import useHttp from './hooks/use-http';
import SearchForm from './components/SearchForm';
import LocationsList from './components/Locations/LocationsList';
import LocationContext from './store/location-context';
import SingleLocationItem from './components/Locations/SingleLocation/SingleLocationItem';
import SearchBox from './components/SearchBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route path="/:country/:city" element={<SingleLocationItem />} />
        <Route path="/" element={<SearchBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
