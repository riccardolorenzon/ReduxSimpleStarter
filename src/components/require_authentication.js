import React, { Component } from 'react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}


// In some other location... Not in this fiel...
// We want to use this HOC
import Authentication; // this is my HOC
import Resources; // this is the component i want to wrap

const ComposedComponent = Authentication(Resources);

// In some render method...
<ComposedComponent resources={resourceList} />
