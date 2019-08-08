import React, { Component } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, Keyboard } from 'react-native';

// Styles
import styles from './button.styles';

/**
 *             propsName        description                 value
 * @props --> textColor
 * @props --> showBorder
 * @props --> disabled
 * @props --> text
 * @props --> isLoading
 * @props --> color
 */

class ButtonView extends Component {
  componentWillReceiveProps(nextProps) {
    const { isLoading } = this.props;
    if (nextProps.isLoading !== isLoading && nextProps.isLoading) {
      Keyboard.dismiss();
    }
  }

  _handleOnPress = () => {
    const { onPress } = this.props;

    if (onPress) {
      onPress();
    }
  };

  render() {
    const { disabled, text, isLoading, color, textColor, showBorder, style, isBold } = this.props;
    const textOrIndicator = !isLoading ? (
      <Text
        style={[
          styles.buttonText,
          textColor && { color: textColor },
          isBold && { fontWeight: 'bold' },
        ]}
      >
        {text}
      </Text>
    ) : (
      <ActivityIndicator style={styles.activityIndicator} size="small" color="white" />
    );

    return (
      <TouchableOpacity
        disabled={isLoading || disabled}
        style={[
          style,
          styles.button,
          color && { backgroundColor: color, top: 0 },
          !showBorder && styles.border,
          disabled ? styles.disableButton : null,
        ]}
        onPress={() => this._handleOnPress()}
      >
        {textOrIndicator}
      </TouchableOpacity>
    );
  }
}

export default ButtonView;
