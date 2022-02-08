import React from 'react';

export default function ForecastItem(props) {
  const { date, minTemp, maxTemp, symbol } = props.forecastData;
  return (
    <li>
      <h3>{date}</h3>
      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
        alt=""
      />
      <h3>
        Min {minTemp} Max {maxTemp}
      </h3>
    </li>
  );
}
