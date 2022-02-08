import React, { useContext } from 'react';
import LocationContext from '../../store/location-context';
import LocationsListItem from './LocationsListItem';

export default function LocationsList(props) {
  const { searchResults } = useContext(LocationContext);
  return (
    <ul>
      {searchResults.map(({ id, name: city, country }) => (
        <LocationsListItem key={id} id={id} city={city} country={country} />
      ))}
    </ul>
  );
}
