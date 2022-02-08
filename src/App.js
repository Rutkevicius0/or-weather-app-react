import { useEffect, useContext } from 'react';
import './App.css';
import useHttp from './hooks/use-http';

import LocationContext from './store/location-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

function App() {
  const { searchInputValue, searchResultsHandler } =
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
        <Route path=":country/:city/:id" element={<WeatherPage />} />
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
