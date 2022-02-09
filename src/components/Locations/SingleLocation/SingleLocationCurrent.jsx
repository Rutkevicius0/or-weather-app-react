import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import LocationContext from '../../../store/location-context';

export default function SingleLocationCurrent(props) {
  const { sendRequest } = useHttp();
  const { id } = useParams();
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
    <div>
      <div>
        <h3>{temperature}</h3>
        <h4>Feels like {feelsLikeTemp}</h4>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Wind speed: {windSpeed} m/s</p>
      </div>
      <div>
        <img
          src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
          alt={symbolPhrase}
        />
        <p>{symbolPhrase}</p>
      </div>
    </div>
  );
}
