import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import ActivityContainer from '../../containers/activity.container';

import styles from './customers.styles';

const LIST_DATA = [
  { name: 'Sac Kesimi', price: '20', icon: '', id: 1 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 2 },
  { name: 'Sac Kesimi', price: '30', icon: '', id: 3 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 4 },
  { name: 'Sac Kesimi', price: '20', icon: '', id: 5 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 6 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 7 },
];

class CustomersScreen extends Component {
  state = {};

  _renderItem = ({ item }) => (
    <View style={styles.listItemView}>
      <View style={styles.listItemLeft}>
        <Icon style={styles.icon} name="content-cut" size={35} />
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>{item.price}</Text>
      </View>
    </View>
  );

  _keyExtractor = item => item.id.toString();

  render() {
    const data = LIST_DATA.map(item => parseInt(item.price, 10));

    return (
      <ActivityContainer>
        {() => (
          <View style={styles.bottomView}>
            <FlatList
              data={LIST_DATA}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        )}
      </ActivityContainer>
    );
  }
}

export default CustomersScreen;
