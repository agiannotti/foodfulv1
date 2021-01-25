import React, { Component, createContext } from 'react';

export const resourceToEdit = {
  title: '',
  content: '',
  zipcode: '',
  error: null,
};

const EditResourceContext = createContext({
  resource: resourceToEdit,
  error: null,
  editResource: () => {},
});

export default EditResourceContext;

export class EditResourceProvider extends Component {
  state = {
    resource: resourceToEdit,
    error: null,
  };
  editResource = (resource) => {
    this.setState({ resource });
  };
  setError = (error) => {
    console.error(error);
    this.setState({ error });
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
      <EditResourceContext.Provider value={value}>
        {this.props.children}
      </EditResourceContext.Provider>
    );
  }
}
