import { useState, useEffect } from 'react';
import './App.css';
import useHttp from './hooks/use-http';
// import { Cases } from './utilities/requests';
import SearchForm from './components/SearchForm';
import LocationsList from './components/Locations/LocationsList';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [locations, setLocations] = useState([]);

  const { sendRequest } = useHttp();

  useEffect(() => {
    const getLocations = ({ locations }) => setLocations(locations);
    const identifier = setTimeout(() => {
      sendRequest('search', searchValue, getLocations);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [sendRequest, searchValue]);

  const locationSearchHandler = (searchValue) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="App">
      <SearchForm onLocationSearch={locationSearchHandler} />
      <LocationsList locations={locations} />
    </div>
  );
}

export default App;
