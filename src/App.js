import { useEffect, useContext } from 'react';
import './scss/base.scss';
import useHttp from './hooks/use-http';

import LocationContext from './store/location-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import WeatherPage from './pages/Weatherpage';

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
    <div className="app container">
      <BrowserRouter>
        <Routes>
          <Route path="/:country/:city/:id" element={<WeatherPage />} />
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
