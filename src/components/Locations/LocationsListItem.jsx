import React from 'react';

import { Link } from 'react-router-dom';
import '../../scss/locationsList.scss';

const LocationsListItem = (props) => {
  return (
    <li className="list-group-item p-3 mt-2 rounded">
      <Link
        className="router-link"
        to={`/${props.country}/${props.city}/${props.id}`}
      >
        {`${props.city}, ${props.country}`}
      </Link>
    </li>
  );
};
export default LocationsListItem;
