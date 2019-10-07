import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './iconButton.styles';

const IconButton = ({
  size = 25,
  borderRadius = 15,
  backgroundColor = '#4A98F7',
  color = 'white',
  iconName,
  noButton,
  onPress,
  containerStyle,
  text,
  disabled,
  ...props
}) => {
  if (noButton) {
    return (
      <View style={[styles.container, { borderRadius }, { backgroundColor }]}>
        {text && <Text style={styles.text}>{text}</Text>}
        <Icon name={iconName} color={color} size={size} {...props} />
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        { borderRadius },
        { backgroundColor },
      ]}
      disabled={disabled}
    >
      {text && <Text style={styles.text}>{text}</Text>}
      <Icon name={iconName} color={color} size={size} {...props} />
    </TouchableOpacity>
  );
};

export default IconButton;
