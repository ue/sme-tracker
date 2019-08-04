import { Component } from 'react';

class ExchangeContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default ExchangeContainer;
