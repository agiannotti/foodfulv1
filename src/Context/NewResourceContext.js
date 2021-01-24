import React, { Component } from 'react';

export const nullResource = {
  title: '',
  content: '',
  zipcode: '',
  date_published: '',
};

const NewResourceContext = React.createContext({
  resource: nullResource,
  error: null,
  setResource: () => {},
  clearResource: () => {},
  setError: () => {},
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
      error: this.state.error,
      setResource: this.setResource,
      clearResource: this.clearResource,
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
