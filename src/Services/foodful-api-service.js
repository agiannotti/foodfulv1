import config from '../config';
const ResourceURL = `${config.API_ENDPOINT}/resources`;
const ResourceAuthorization = `Bearer ${config.API_KEY}`;

const ResourceApiService = {
  getResources() {
    return fetch(ResourceURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: ResourceAuthorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  postNewResource(title, content, zipcode) {
    const resource = {
      title,
      content,
      zipcode,
    };
    return fetch(ResourceURL, {
      method: 'POST',
      body: JSON.stringify(resource),
      headers: {
        'Content-type': 'application/json',
        Authorization: ResourceAuthorization,
      },
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  deleteResource(id) {
    return fetch(`${config.API_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: ResourceAuthorization,
      },
      getSingleResource(param) {
        return fetch(`${config.API_ENDPOINT}/${param}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: ResourceAuthorization,
          },
        }).then((res) => {
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
        });
      },
    });
  },

  patchResource(id, title, content, zipcode, date_published) {
    return fetch(`${ResourceURL}/${id}`, {
      method: 'POST',
      body: JSON.stringify(id, title, content, zipcode, date_published),
      headers: {
        'Content-type': 'application/json',
        Authorization: ResourceAuthorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default ResourceApiService;
