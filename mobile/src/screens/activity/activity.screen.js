import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import DashboardContainer from '../../containers/dashboard.container';

import styles from './acticity.styles';

const LIST_DATA = [
  { name: 'Sac Kesimi', price: '20', icon: '', id: 1 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 2 },
  { name: 'Sac Kesimi', price: '30', icon: '', id: 3 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 4 },
  { name: 'Sac Kesimi', price: '20', icon: '', id: 5 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 6 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 7 },
];

class ActivityScreen extends Component {
  state = {};

  _addButtonOnPress = () => {
    const { price, exchangeType } = this.state;
    alert(`${price} ${exchangeType}`);
  };

  _closeButtonOnPress = () => {
    this.setState({ price: '0', exchangeType: 'java' });
  };

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
      <DashboardContainer>
        {() => (
          <View style={styles.container}>
            <View style={styles.topView}>
              <View style={styles.informatinView}>
                <Text style={styles.dailyPriceText}>1.265 ₺</Text>
                <Text>Gunluk</Text>
                <Text style={styles.mountlyPriceText}>15.320 ₺</Text>
                <Text>Aylik</Text>
              </View>
              <AreaChart
                style={styles.chart}
                data={data}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(100, 170, 255, 1)' }}
                gridMin={0}
              />
            </View>
            <View style={styles.bottomView}>
              <FlatList
                data={LIST_DATA}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
            </View>
          </View>
        )}
      </DashboardContainer>
    );
  }
}

export default ActivityScreen;
