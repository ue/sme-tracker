import React, { Component } from 'react';
import { TextInput, View, Picker } from 'react-native';

import ExchangeContainer from '../../containers/exchange.container';

import IconButton from '../../components/iconButton/iconButton.view';

import styles from './exchange.styles';

class ExchangeScreen extends Component {
  state = {
    exchangeType: 'java',
    price: 0,
  };

  _addButtonOnPress = () => {
    const { price, exchangeType } = this.state;
    alert(`${price} ${exchangeType}`);
  };

  _closeButtonOnPress = () => {
    this.setState({ price: '0', exchangeType: 'java' });
  };

  render() {
    const { exchangeType, price } = this.state;
    return (
      <ExchangeContainer>
        {() => (
          <View style={styles.container}>
            <View style={styles.topView}>
              <Picker
                selectedValue={exchangeType}
                style={styles.picker}
                onValueChange={itemValue => this.setState({ exchangeType: itemValue })}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Java" value="java1" />
                <Picker.Item label="JavaScript" value="js1" />
                <Picker.Item label="Java" value="java2" />
                <Picker.Item label="JavaScript" value="js2" />
              </Picker>
              <TextInput
                value={price.toString()}
                onChangeText={value => this.setState({ price: value })}
                style={styles.textInput}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.bottomView}>
              <IconButton
                onPress={this._addButtonOnPress}
                size={55}
                borderRadius={32}
                iconName="plus"
              />
              <IconButton
                onPress={this._closeButtonOnPress}
                size={30}
                borderRadius={20}
                iconName="close"
                color="#4A98F7"
                backgroundColor="white"
              />
            </View>
          </View>
        )}
      </ExchangeContainer>
    );
  }
}

export default ExchangeScreen;
