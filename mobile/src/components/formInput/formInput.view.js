import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

// Styles
import styles from './formInput.styles';

// Utilities
import inputValidation from '../../utilities/validation';

class FormInputView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      isInputValid: true,
      isEyeActive: true,
    };

    this.inputRef = React.createRef();
  }

  _handleOnInputChange = value => {
    const { onInputChange } = this.props;
    this.setState({ inputValue: value }, () => {
      this._validateInput();
    });
    if (onInputChange) {
      onInputChange(value);
    }
  };

  _validateInput = () => {
    const { isValid, validationRule, componentId } = this.props;
    let _validationRule = validationRule;
    const { inputValue } = this.state;

    // Spesific case for both of them
    if (validationRule === 'emailorusername' && _validationRule) {
      /* eslint-disable-next-line */
      inputValue && inputValue.includes('@')
        ? (_validationRule = 'email')
        : (_validationRule = 'username');
    }
    const _IsInputValid = inputValidation(inputValue, _validationRule);

    this.setState({ isInputValid: _IsInputValid });

    if (isValid) {
      isValid(_IsInputValid, componentId);
    }
  };

  _handleToggle = isEyeActive => {
    this.setState({ isEyeActive });
  };

  _handleOnInputBlur(value) {
    const { onInputBlur } = this.props;
    const { inputValue } = this.state;

    if (inputValue && inputValue.length > 0) {
      this._validateInput();
    }

    if (onInputBlur) {
      onInputBlur(value);
    }
  }

  render() {
    const {
      labelText,
      secureTextEntry,
      componentId,
      autoFocus,
      onSubmitEditing,
      returnKeyLabel,
      returnKeyType,
    } = this.props;
    const { isInputValid, isEyeActive, inputValue } = this.state;

    return (
      <View style={styles.formInput}>
        <Text
          style={[
            styles.inputText,
            !isInputValid && inputValue.length > 0 ? styles.invalidInputText : null,
          ]}
        >
          {labelText}
        </Text>
        <TextInput
          ref={input => {
            this.input = input;
          }}
          returnKeyLabel={returnKeyLabel}
          returnKeyType={returnKeyType}
          onSubmitEditing={() => onSubmitEditing && onSubmitEditing(this.input)}
          blurOnSubmit
          autoFocus={autoFocus}
          allowFontScaling
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          style={[
            styles.input,
            !isInputValid && inputValue.length > 0 ? styles.invalidInput : null,
          ]}
          onBlur={value => this._handleOnInputBlur(value)}
          secureTextEntry={secureTextEntry && isEyeActive}
          onChangeText={value => {
            this._handleOnInputChange(value);
          }}
          keyboardType={
            componentId === 'emailorusername' || componentId === 'email' ? 'email-address' : null
          }
          autoCorrect={false}
        />
        {/* {secureTextEntry ? (
          <IconButton
            style={styles.showPasswordIcon}
            handleToggle={this._handleToggle}
            defaultToggled
            size={25}
            name="eye"
            toggledName="eye-off"
          />
        ) : null} */}
      </View>
    );
  }
}

export default FormInputView;
