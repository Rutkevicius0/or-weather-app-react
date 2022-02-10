import React, { useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import LocationContext from '../store/location-context';
import SingleLocationCurrent from '../components/Locations/SingleLocation/SingleLocationCurrent';
import SingleLocationForecast from '../components/Locations/SingleLocation/SingleLocationForecast';

export default function WeatherPage() {
  useEffect(() => {
    console.log('weather component mounted');
    return () => {
      console.log('weather unmounted');
    };
  }, []);

  const mounted = useRef(false);

  const {
    locationCurrentWeather,
    locationForecast,
    locationCurrentWeatherHandler,
    locationForecastHandler,
    singleLocationInfoHandler,
  } = useContext(LocationContext);
  const { sendRequest } = useHttp();
  const { id, city, country } = useParams();
  const mountedRef = useRef();

  useEffect(() => {
    mounted.current = true;
    sendRequest('current', id, locationCurrentWeatherHandler);
    sendRequest('forecast', id, locationForecastHandler);
    return () => {
      mountedRef.current = false;
    };
  }, []);
  console.log(mounted);
  console.log(locationCurrentWeather);

  // sendRequest('current', id, locationCurrentWeatherHandler);
  // sendRequest('forecast', id, locationForecastHandler);

  return (
    <div className="container container-trans">
      {/* <h2 className="text-secondary">{`Current weather in ${city}, ${country}`}</h2> */}
      {locationCurrentWeather.current && (
        <SingleLocationCurrent currentWeather={locationCurrentWeather} />
      )}
      {locationForecast.forecast && (
        <SingleLocationForecast forecast={locationForecast} />
      )}
    </div>
  );
}
