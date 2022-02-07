import React, { useState, useEffect } from 'react';

const LocationContext = React.createContext({
  selectedLocation: '',
  loadLocation: (id) => {},
  data: '',
  loadData: () => {},
});

export const LocationContextProvider = (props) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [data, setData] = useState([]);

  const loadLocation = (id) => {
    setSelectedLocation(id);
  };
  const loadData = (data) => {
    setData(data);
  };

  return (
    <LocationContext.Provider
      value={{ selectedLocation, loadLocation, data, loadData }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
export default LocationContext;
