import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import LocationContext from '../../../store/location-context';
import '../../../scss/weather.scss';
export default function SingleLocationCurrent(props) {
  const { sendRequest } = useHttp();
  const { id, city, country } = useParams();
  const { locationCurrentWeather, locationCurrentWeatherHandler } =
    useContext(LocationContext);
  const {
    current: {
      temperature,
      feelsLikeTemp,
      cloudiness,
      windSpeed,
      symbol,
      symbolPhrase,
    },
  } = props.currentWeather;

  // useEffect(() => {
  //   sendRequest('current', id, locationCurrentWeatherHandler);
  //   // sendRequest('forecast', id, locationForecastHandler);
  // }, []);

  return (
    <div className="card pt-3">
      <h1 className="mb-0">
        {city}, {country}
      </h1>
      <h4>Now</h4>
      <div className=" d-flex flex-row justify-content-around align-items-center pb-2">
        <div className="current-weather">
          <h3 className="">
            {temperature} <span>°C</span>
          </h3>
          <h4 className="">Feels like {feelsLikeTemp}°C</h4>
          <p>Cloudiness: {cloudiness}%</p>
          <p>Wind speed: {windSpeed} m/s</p>
        </div>
        <div className="current-weather--image">
          <img
            src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
            alt={symbolPhrase}
          />
          <p>{symbolPhrase.charAt(0).toUpperCase() + symbolPhrase.slice(1)}</p>
        </div>
      </div>
    </div>
  );
}
