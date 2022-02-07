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
export const Cases = () => {
  const axiosEndPoint =
    'https://foreca-weather.p.rapidapi.com/location/search/mumbai';

  const getData = async (url) => {
    try {
      const data = await axios.get(axiosEndPoint, options);
      //if statement checking response code
      return data;
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  };

  return getData(axiosEndPoint);
};
