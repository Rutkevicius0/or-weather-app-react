import React from 'react';

export default function SingleLocationCurrent(props) {
  console.log(props.currentWeather);

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
