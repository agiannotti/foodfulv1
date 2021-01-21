import React from 'react';

export const nullResource = {
  title: '',
  content: '',
  zipcode: '',
  date_published: '',
};

export const ResourceContext = React.createContext({
  resource: nullResource,
  error: null,
  setError: () => {},
  clearError: () => {},
  setResource: () => {},
  clearResource: () => {},
});

export class ResourceProvider extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    resource: nullResource,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setResource = (resource) => {
    this.setState({ resource });
  };

  clearResource = () => {
    this.setState({ nullResource });
  };

  render() {
    const value = {
      resource: this.state.resource,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResource: this.setResource,
      clearResource: this.clearResource,
    };

    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}
