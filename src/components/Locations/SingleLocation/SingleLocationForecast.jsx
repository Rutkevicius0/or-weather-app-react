import React from 'react';
import ForecastItem from './ForecastItem';

export default function SingleLocationForecast(props) {
  console.log(props.forecast);
  const { forecast } = props.forecast;
  return (
    <ul>
      {forecast.map((fObj) => (
        <ForecastItem key={fObj.date} forecastData={fObj} />
      ))}
    </ul>
  );
}
