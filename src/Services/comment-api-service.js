import config from '../config';

const CommentURL = `${config.API_ENDPOINT}/comments`;
const CommentAuth = `Bearer ${config.API_KEY}`;

const CommentApiService = {
  getComments() {
    return fetch(CommentURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: CommentAuth,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  postNewComment(content, date_created, resource_id) {
    const comment = {
      content,
      date_created,
      resource_id,
    };
    return fetch(CommentURL, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json',
        Authorization: CommentAuth,
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
        Authorization: CommentAuth,
      },
      getSingleComment(param) {
        return fetch(`${config.API_ENDPOINT}/${param}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: CommentAuth,
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
        Authorization: CommentAuth,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default CommentApiService;
