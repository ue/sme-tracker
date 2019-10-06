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
    isLoading: false,
    errorText: null,
    emailInput: null,
    passwordInput: null,
  };

  // Component liftcycle function
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      this.setState({
        isLoading: false,
        errorText: nextProps.errorMessage,
      });
    }
  }

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

  _handleOnButtonPress = () => {
    const { handleLogin } = this.props;
    const { emailInput, passwordInput } = this.state;

    if (handleLogin && (emailInput && passwordInput)) {
      this.setState({ isLoading: true, errorText: null }, () => {
        handleLogin(this.state);
      });
    }
  };

  render() {
    const {
      isLoading,
      errorText,
      emailInput,
      passwordInput,
      email,
      password,
    } = this.state;
    return (
      <LoginContainer>
        {({ login }) => (
          <Page style={styles.container}>
            <Form onSubmitButtonPress={() => this._handleOnButtonPress()}>
              <Text>LOGIN</Text>
              <FormInput
                autoFocus
                componentId="email"
                labelText="E-mail"
                onInputChange={this._handleOnUsernameEmailChange}
                onInputBlur={() => this._handleOnInputBlur}
                secureTextEntry={false}
                validationRule={LOGIN.CASE.EMAIL}
                isValid={this._handleIsValid}
                returnKeyType="next"
              />
              <FormInput
                returnKeyType="done"
                componentId="password"
                labelText="Password"
                onInputChange={this._handleOnPasswordInputChange}
                onInputBlur={() => this._handleOnInputBlur}
                secureTextEntry
                validationRule={LOGIN.CASE.PASSWORD}
                isValid={this._handleIsValid}
              />
              <Text style={styles.errorText}>{errorText}</Text>
              <Button
                disabled={isLoading || !(emailInput && passwordInput)}
                onPress={() => login({ email, password })}
                text="Giris"
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
