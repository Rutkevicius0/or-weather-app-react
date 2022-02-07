import React from 'react';
import LocationsListItem from './LocationsListItem';

export default function LocationsList(props) {
  return (
    <ul>
      {props.locations.map(({ id, name: city, country }) => (
        <LocationsListItem key={id} id={id} city={city} country={country} />
      ))}
    </ul>
  );
}
