import React, { Component } from 'react';
import { Text } from 'react-native';

import DashboardContainer from '../containers/dashboard.container';

class DashboardScreen extends Component {
  state = {};

  render() {
    return <DashboardContainer>{() => <Text>test</Text>}</DashboardContainer>;
  }
}

export default DashboardScreen;
