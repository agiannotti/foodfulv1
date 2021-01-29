import React, { Component } from 'react';
import ResourcesContext from '../Context/ResourcesContext';
import ResourceApiService from '../services/foodful-api-service';
import Resources from '../Components/Foodful/ResourceList';

export default class ResourceListPage extends Component {
  static contextType = ResourcesContext;

  componentDidMount() {
    this.context.clearError();
    ResourceApiService.getresources()
      .then((res) => this.context.setresourceList(res))
      .catch(this.context.setError);
  }

  renderResources() {
    const { resourceList = [] } = this.context;
    return resourceList.map((resource) => (
      <resourceList key={resource.id} resource={resource} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <div list className='resourceListPage'>
        {error ? (
          <p className='red'>There was an error, try again</p>
        ) : (
          this.renderResources()
        )}
      </div>
    );
  }
}
