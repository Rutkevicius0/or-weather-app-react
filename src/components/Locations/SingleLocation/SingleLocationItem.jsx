import React, { useContext } from 'react';
import LocationContext from '../../../store/location-context';

export default function SingleLocationItem() {
  const { singleLocationInfo } = useContext(LocationContext);
  const { name: city, country } = singleLocationInfo;
  return (
    <div>
      <h2>{`${city}, ${country}`}</h2>
    </div>
  );
}
