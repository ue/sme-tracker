import { Component } from 'react';

class DashboardContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default DashboardContainer;
