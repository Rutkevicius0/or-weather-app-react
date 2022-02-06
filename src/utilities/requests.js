import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://foreca-weather.p.rapidapi.com/location/search/mumbai',
  params: { lang: 'en', country: 'in' },
  headers: {
    'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
    'x-rapidapi-key': '3505f65e4cmsh45e2e9294ac6901p124043jsnf13155154975',
  },
};

const getData = async () => {
  const response = await axios(options);
  const data = await response.json();
  return data;
};

export default getData;
