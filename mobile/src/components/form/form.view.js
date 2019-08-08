import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Styles
import styles from './form.styles';

class FormView extends Component {
  _handleKeyboardStatus = () => {
    // const { handleIsKeyboardOpen } = this.props;
    // if (handleIsKeyboardOpen) {
    //   handleIsKeyboardOpen();
    // }
  };

  _handleOnSubmitEditing = (returnKeyType = null, inputElement = null) => {
    const { onSubmitButtonPress } = this.props;

    if (onSubmitButtonPress && returnKeyType === 'done') {
      onSubmitButtonPress();
    } else if (returnKeyType === 'next' && inputElement) {
      // TODO: its accept current input but its should be next input ref
      inputElement.focus();
    }
  };

  _displayChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, child => {
      if (child) {
        return React.cloneElement(child, {
          onSubmitEditing: item => this._handleOnSubmitEditing(child.props.returnKeyType, item),
        });
      }
      return null;
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        onKeyboardWillShow={this._handleKeyboardStatus}
        onKeyboardWillHide={this._handleKeyboardStatus}
      >
        <View style={styles.form}>{this._displayChildren()}</View>
      </KeyboardAwareScrollView>
    );
  }
}

export default FormView;
