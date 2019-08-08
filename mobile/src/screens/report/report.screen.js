import React, { Component } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ReportContainer from '../../containers/report.container';

import styles from './report.styles';

const LIST_DATA = [
  { name: 'Sac Kesimi', price: '20', icon: '', id: 1 },
  { name: 'Sac Kesimi', price: '50', icon: '', id: 2 },
  { name: 'Sac Kesimi', price: '30', icon: '', id: 3 },
  { name: 'Sac Kesimi', price: '20', icon: '', id: 4 },
  { name: 'Sac Kesimi', price: '20', icon: '', id: 5 },
  { name: 'Sac Kesimi', price: '10', icon: '', id: 6 },
  { name: 'Sac Kesimi', price: '30', icon: '', id: 7 },
];

class ActivityScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'daily', title: 'Gunluk' },
      { key: 'monthly', title: 'Aylik' },
      { key: 'yearly', title: 'Yillik' },
    ],
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

  _dailyReportTab = () => (
    <FlatList data={LIST_DATA} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
  );

  _monthlyReportTab = () => (
    <FlatList data={LIST_DATA} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
  );

  _yearlyReportTab = () => (
    <FlatList data={LIST_DATA} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
  );

  render() {
    const data = LIST_DATA.map(item => parseInt(item.price, 10));
    return (
      <ReportContainer>
        {() => (
          <View style={styles.container}>
            <View style={styles.topView}>
              <View style={styles.informatinView}>
                <Text style={styles.dailyPriceText}>1.265 ₺</Text>
                <Text>Aylik Toplam</Text>
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
              <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  daily: this._dailyReportTab,
                  monthly: this._monthlyReportTab,
                  yearly: this._yearlyReportTab,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props => (
                  <TabBar
                    {...props}
                    indicatorStyle={styles.tabbarIndicator}
                    style={styles.tabbar}
                    labelStyle={styles.tabbarLabel}
                  />
                )}
              />
            </View>
          </View>
        )}
      </ReportContainer>
    );
  }
}

export default ActivityScreen;
