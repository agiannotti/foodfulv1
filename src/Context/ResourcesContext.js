import React, { Component, createContext } from 'react';
const ResourceContext = createContext({
  resourceList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setResourceList: () => {},
});

export default ResourceContext;

export class ResourceProvider extends Component {
  state = {
    resourceList: [],
    error: null,
  };
  setResourceList = (resourceList) => {
    this.setState({ resourceList });
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
      resourceList: this.state.resourceList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResourceList: this.setResourceList,
    };
    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}
