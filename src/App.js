import { useEffect, useContext } from 'react';
import './App.css';
import useHttp from './hooks/use-http';

import LocationContext from './store/location-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import WeatherPage from './pages/Weatherpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:country/:city/:id" element={<WeatherPage />} />
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
