import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { LocationContextProvider } from './store/location-context';

ReactDOM.render(
  <LocationContextProvider>
    <App />
  </LocationContextProvider>,
  document.getElementById('root'),
);
