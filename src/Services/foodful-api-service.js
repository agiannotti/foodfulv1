import config from '../config';

const FoodfulApiService = {
  getResources() {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default FoodfulApiService;
