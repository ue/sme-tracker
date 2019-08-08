import React, { Component } from 'react';
import { Text, View } from 'react-native';

import SplashContainer from '../../containers/splash.container';

import styles from './splash.styles';

class SplashScreen extends Component {
  state = {};

  render() {
    return (
      <SplashContainer>
        {() => (
          <View style={styles.container}>
            <Text>SPLASH</Text>
          </View>
        )}
      </SplashContainer>
    );
  }
}

export default SplashScreen;
