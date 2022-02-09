import React, { useContext } from 'react';

import LocationContext from '../../store/location-context';
import useHttp from '../../hooks/use-http';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const LocationsListItem = (props) => {
  const ctx = useContext(LocationContext);

  console.log(ctx);
  return (
    <li className="list-group-item p-3 mt-1 rounded">
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
