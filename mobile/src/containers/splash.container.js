import { Component } from 'react';
import { withNavigation } from 'react-navigation';

import ROUTES from '../constants/routeNames';

class SplashContainer extends Component {
  state = {};

  componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate(ROUTES.NAVIGATOR.NO_AUTH);
    }, 1000);
  }

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default withNavigation(SplashContainer);
