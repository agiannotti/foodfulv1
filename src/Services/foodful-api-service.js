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
  deleteResource(id) {
    return fetch(`${config.API_ENDPOINT}/resources/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      getSingleResource(param) {
        return fetch(`${config.API_ENDPOINT}/resources/${param}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${config.API_KEY}`,
          },
        }).then((res) => {
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
        });
      },
    });
  },
};

export default FoodfulApiService;
