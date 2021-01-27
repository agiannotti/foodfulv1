import React, { Component, createContext } from 'react';

export const nullResource = {
  title: '',
  content: '',
  zipcode: '',
  date_published: '',
};

export const nullComment = {
  id: '',
  content: '',
  date_created: '',
  resource_id: '',
};

const NewResourceContext = createContext({
  resource: nullResource,
  comment: nullComment,
  error: null,
  setResource: () => {},
  clearResource: () => {},
  setComment: () => {},
  clearComment: () => {},
  setError: () => {},
  clearError: () => {},
});

export default NewResourceContext;

export class NewResourceProvider extends Component {
  state = {
    resource: nullResource,
    error: null,
  };

  setResource = (resource) => {
    this.setState({ resource });
  };

  clearResource = () => {
    this.setState({ nullResource });
  };

  setComment = (comment) => {
    this.setState({ comment });
  };

  clearComment = () => {
    this.setState({ nullComment });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      resource: this.state.resource,
      comment: this.state.comment,
      error: this.state.error,
      setResource: this.setResource,
      clearResource: this.clearResource,
      setComment: this.setComment,
      clearComment: this.clearComment,
      setError: this.setError,
      clearError: this.clearError,
    };
    return (
      <NewResourceContext.Provider value={value}>
        {this.props.children}
      </NewResourceContext.Provider>
    );
  }
}
