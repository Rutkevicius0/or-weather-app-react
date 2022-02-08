import React, { useContext } from 'react';
import LocationContext from '../store/location-context';

export default function SearchForm(props) {
  const ctx = useContext(LocationContext);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        onChange={(e) => {
          ctx.searchInputValueHandler(e.target.value);
        }}
      />
    </form>
  );
}
