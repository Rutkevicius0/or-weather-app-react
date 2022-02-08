import React, { useContext } from 'react';
import LocationContext from '../../store/location-context';
import useHttp from '../../hooks/use-http';

export default function LocationsListItem(props) {
  const ctx = useContext(LocationContext);
  const { sendRequest } = useHttp();
  const getWeatherData = () => {
    sendRequest('info', props.id, ctx.singleLocationInfoHandler);
    sendRequest('current', props.id, ctx.locationCurrentWeatherHandler);
    sendRequest('forecast', props.id, ctx.locationForecastHandler);
  };
  console.log(ctx);
  return <li onClick={getWeatherData}>{`${props.city}, ${props.country}`}</li>;
}
