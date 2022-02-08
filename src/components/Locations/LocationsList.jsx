import React, { useContext } from 'react';
import LocationContext from '../../store/location-context';
import LocationsListItem from './LocationsListItem';

export default function LocationsList(props) {
  const { searchResults } = useContext(LocationContext);
  const slicedSearchResults = searchResults.slice(0, 5);
  return (
    <ul>
      {slicedSearchResults.map(({ id, name: city, country }) => (
        <LocationsListItem key={id} id={id} city={city} country={country} />
      ))}
    </ul>
  );
}
