import React from 'react';

export default function SearchForm(props) {
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
          props.onLocationSearch(e.target.value);
        }}
      />
    </form>
  );
}
