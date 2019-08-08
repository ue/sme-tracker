import { Component } from 'react';

class SplashContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default SplashContainer;
