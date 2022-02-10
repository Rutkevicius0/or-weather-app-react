import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/custom.scss';
import { LocationContextProvider } from './store/location-context';
console.log(process.env);
ReactDOM.render(
  <LocationContextProvider>
    <App />
  </LocationContextProvider>,
  document.getElementById('root'),
);
