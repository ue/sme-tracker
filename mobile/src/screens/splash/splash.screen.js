import React, { Component } from 'react';
import { Text } from 'react-native';

import Page from '../../components/page/page.view';
import SplashContainer from '../../containers/splash.container';

import styles from './splash.styles';

class SplashScreen extends Component {
  state = {};

  render() {
    return (
      <SplashContainer>
        {() => (
          <Page style={styles.container}>
            <Text>SPLASH</Text>
          </Page>
        )}
      </SplashContainer>
    );
  }
}

export default SplashScreen;
