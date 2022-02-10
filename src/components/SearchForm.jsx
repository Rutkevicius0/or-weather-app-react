import React, { useContext } from 'react';
import LocationContext from '../store/location-context';
import '../scss/base.scss';

export default function SearchForm(props) {
  const ctx = useContext(LocationContext);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="search-form  rounded
    p-3"
    >
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          className="form-control"
          type="text"
          id="location"
          placeholder="Enter city"
          onChange={(e) => {
            ctx.searchInputValueHandler(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
