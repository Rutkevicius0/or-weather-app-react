import React from 'react';
import LocationsListItem from './LocationsListItem';

export default function LocationsList(props) {
  return (
    <ul>
      {props.locations.map(({ name: city, country }) => (
        <LocationsListItem city={city} country={country} />
      ))}
    </ul>
  );
}
