import config from '../config';
const ResourceURL = `${config.API_ENDPOINT}/resources`;
const CommentURL = `${config.API_ENDPOINT}/comments`;
const Authorization = `Bearer ${config.API_KEY}`;

const ResourceApiService = {
  getResources() {
    return fetch(ResourceURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
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
        Authorization: Authorization,
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
        Authorization: Authorization,
      },
      getSingleResource(param) {
        return fetch(`${config.API_ENDPOINT}/${param}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: Authorization,
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
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  getComments() {
    return fetch(CommentURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  postNewComment(content, date_created, targetResourceId) {
    const comment = {
      content,
      date_created,
      targetResourceId,
    };
    return fetch(CommentURL, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
    // testing if state can be modified through context to use goBack() + assign targetResourceId
    // .then((data) => {addComment(data); this.setState({ content: '', date_created: '', resource_id: '',});
    // this.props.history.goBack();
  },

  deleteComment(id) {
    return fetch(`${config.API_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
      getSingleComment(param) {
        return fetch(`${config.API_ENDPOINT}/${param}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: Authorization,
          },
        }).then((res) => {
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
        });
      },
    });
  },

  patchComment(id, title, content, zipcode, date_published) {
    return fetch(`${CommentURL}/${id}`, {
      method: 'POST',
      body: JSON.stringify(id, title, content, zipcode, date_published),
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default ResourceApiService;
