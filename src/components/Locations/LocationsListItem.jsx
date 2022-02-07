import React, { useContext } from 'react';
import LocationContext from '../../store/location-context';
import useHttp from '../../hooks/use-http';

export default function LocationsListItem(props) {
  const ctx = useContext(LocationContext);
  const { sendRequest } = useHttp();
  console.log(ctx);
  return (
    <li
      onClick={() => sendRequest('current', props.id, ctx.loadData)}
    >{`${props.city}, ${props.country}`}</li>
  );
}
