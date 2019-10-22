import React, { Component } from 'react';
import { Text } from 'react-native';

import LoginContainer from '../../containers/login.container';

import Form from '../../components/form/form.view';
import FormInput from '../../components/formInput/formInput.view';
import Button from '../../components/button/button.view';
import Page from '../../components/page/page.view';

import LOGIN from '../../constants/validation';

import styles from './login.styles';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    errorText: null,
    emailInput: null,
    passwordInput: null,
  };


  // Component functions
  _handleOnInputBlur = () => {
    /**
     *  TODO: Button isDisable or not
     */
  };

  _handleOnUsernameEmailChange = email => {
    this.setState({ email });
  };

  _handleOnPasswordInputChange = password => {
    this.setState({ password });
  };

  _handleIsValid = (isValid, componentId) => {
    if (componentId === 'email') {
      this.setState({ emailInput: isValid });
    }

    if (componentId === 'password') {
      this.setState({ passwordInput: isValid });
    }
  };

  _handleOnButtonPress = (login) => {
    const {
      email,
      password,
    } = this.state;

    if (login && (email && password)) {
        login({ email, password });
    }
  };

  render() {
    const {
      emailInput,
      passwordInput,
    } = this.state;

    return (
      <LoginContainer>
        {({ login, error, isLoading }) => (
          <Page style={styles.container}>
            <Form onSubmitButtonPress={() => this._handleOnButtonPress()}>
              <Text style={{ color: '#000', fontWeight: '500', fontSize: 20, letterSpacing: 1, }}>Giriş</Text>
              <FormInput
                autoFocus
                componentId="email"
                labelText="Kullanıcı Adı"
                onInputChange={this._handleOnUsernameEmailChange}
                onInputBlur={() => this._handleOnInputBlur}
                secureTextEntry={false}
                validationRule={LOGIN.CASE.USER_NAME}
                isValid={this._handleIsValid}
                returnKeyType="next"
              />
              <FormInput
                returnKeyType="done"
                componentId="password"
                labelText="Şifre"
                onInputChange={this._handleOnPasswordInputChange}
                onInputBlur={() => this._handleOnInputBlur}
                secureTextEntry
                validationRule={LOGIN.CASE.PASSWORD}
                isValid={this._handleIsValid}
              />
              <Text style={styles.errorText}>{error ? "Kullanici adi veya sifre yanlis." : ''}</Text>
              <Button
                disabled={isLoading || !(emailInput && passwordInput)}
                onPress={() =>  this._handleOnButtonPress(login)}
                text="Giriş"
                isLoading={isLoading}
              />
            </Form>
          </Page>
        )}
      </LoginContainer>
    );
  }
}

export default LoginScreen;
