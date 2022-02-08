import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import SingleLocationCurrent from '../components/Locations/SingleLocation/SingleLocationCurrent';
import SingleLocationForecast from '../components/Locations/SingleLocation/SingleLocationForecast';
import useHttp from '../hooks/use-http';
import LocationContext from '../store/location-context';

export default function WeatherPage() {
  const {
    locationCurrentWeather,
    locationForecast,
    locationCurrentWeatherHandler,
    locationForecastHandler,
  } = useContext(LocationContext);
  const { sendRequest } = useHttp();
  const { id, city, country } = useParams();

  // const { name: city, country } = singleLocationInfo;
  useEffect(() => {
    sendRequest('current', id, locationCurrentWeatherHandler);
    sendRequest('forecast', id, locationForecastHandler);
  }, []);

  return (
    <div>
      <h2>{`${city}, ${country}`}</h2>
      <SingleLocationCurrent currentWeather={locationCurrentWeather} />
      <SingleLocationForecast forecast={locationForecast} />
    </div>
  );
}
