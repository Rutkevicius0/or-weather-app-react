import React from 'react';

export default function SearchForm(props) {
  return (
    <form>
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
