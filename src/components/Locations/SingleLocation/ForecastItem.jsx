import React from 'react';
import '../../../scss/weather.scss';
export default function ForecastItem(props) {
  const { date, minTemp, maxTemp, symbol } = props.forecastData;

  return (
    <li className="list-group-item rounded mt-1 forecast-item d-flex flex-row justify-content-around align-items-center">
      <h4>{date}</h4>

      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
        alt=""
      />
      <div className="d-flex flex-row align-items-s">
        <h3>{minTemp}</h3>
        <div className="forecast--temperature-div"></div>
        <h3>{maxTemp}</h3>
      </div>
    </li>
  );
}
