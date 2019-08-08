import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoginContainer from '../../containers/login.container';

import styles from './login.styles';

class LoginScreen extends Component {
  state = {};

  render() {
    return (
      <LoginContainer>
        {() => (
          <View style={styles.container}>
            <Text>LOGIN</Text>
          </View>
        )}
      </LoginContainer>
    );
  }
}

export default LoginScreen;
