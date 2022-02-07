import React from 'react';

export default function LocationsListItem(props) {
  return <li>{`${props.city}, ${props.country}`}</li>;
}
