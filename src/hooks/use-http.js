import { useCallback } from 'react';

const useHttp = () => {
  const sendRequest = useCallback(async (requestFor, value, callbackFn) => {
    let url = 'https://foreca-weather.p.rapidapi.com/';
    if (requestFor === 'search') {
      url = url + `location/search/${value}?lang=en`;
    } else if (requestFor === 'current') {
      url =
        url +
        `current/${value}?alt=0&tempunit=C&windunit=MS&tz=Europe%2FVilnius&lang=en`;
    } else if (requestFor === 'forecast') {
      url =
        url +
        `forecast/daily/${value}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`;
    }
    try {
      await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
          'x-rapidapi-key':
            '3505f65e4cmsh45e2e9294ac6901p124043jsnf13155154975',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          callbackFn(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {}
  }, []);
  return { sendRequest };
};

export default useHttp;
