import { Component } from 'react';

class ActivityContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default ActivityContainer;
