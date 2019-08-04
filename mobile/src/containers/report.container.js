import { Component } from 'react';

class ReportContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default ReportContainer;
