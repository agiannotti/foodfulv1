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

export const resourceToEdit = {
  title: '',
  content: '',
  zipcode: '',
  error: null,
};

const FoodfulContext = createContext({
  resourceList: [],
  resource: nullResource,
  comment: nullComment,
  error: null,
  setResourceList: () => {},
  removeFromResourceList: () => {},
  setResource: () => {},
  clearResource: () => {},
  setComment: () => {},
  clearComment: () => {},
  setError: () => {},
  clearError: () => {},
});

export default FoodfulContext;

export class FoodfulProvider extends Component {
  state = {
    resources: [],
    comments: [],
    resourceList: [],
    resource: nullResource,
    comment: nullComment,
    error: null,
  };

  setResourceList = (resourceList) => {
    this.setState({ resourceList });
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

  removeFromResourceList = (id) => {
    this.setState({
      resourceList: this.state.resourceList.filter((resource) => {
        return resource.id !== id;
      }),
    });
  };

  render() {
    const value = {
      resourceList: this.state.resourceList,
      resource: this.state.resource,
      comment: this.state.comment,
      error: this.state.error,
      setResourceList: this.setResourceList,
      setResource: this.setResource,
      clearResource: this.clearResource,
      setComment: this.setComment,
      clearComment: this.clearComment,
      setError: this.setError,
      clearError: this.clearError,
      removeFromResourceList: this.removeFromResourceList,
    };
    return (
      <FoodfulContext.Provider value={value}>
        {this.props.children}
      </FoodfulContext.Provider>
    );
  }
}
