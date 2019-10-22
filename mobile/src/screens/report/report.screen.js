import React, { useState } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Page from '../../components/page/page.view';
import ReportContainer from '../../containers/report.container';

import styles from './report.styles';

const _renderItem = ({ item, activityTypes, userRole }) => (
  <View style={styles.listItemView}>
    <View style={styles.listItemLeft}>
      <Icon style={styles.icon} name="content-cut" size={35} />
      {userRole === 'admin' ? (
        <Text>{item.name}</Text>
      ) : (
        <Text>{activityTypes.filter(i => i.key === item.name)[0].text}</Text>
      )}
    </View>
    <View>
      <Text>{item.price}</Text>
    </View>
  </View>
);

const _keyExtractor = item => item.name;

const _reportTab = (data, activityTypes, userRole) => (
  <FlatList
    data={data}
    keyExtractor={_keyExtractor}
    renderItem={({ item }) => _renderItem({ item, activityTypes, userRole })}
  />
);

const ActivityScreen = () => {
  const [index, setIndex] = useState(1);
  const [routes, setRoutes] = useState([
    { key: 'daily', title: 'Gunluk' },
    { key: 'monthly', title: 'Aylik' },
    { key: 'yearly', title: 'Yillik' },
  ]);

  return (
    <ReportContainer>
      {({
        dailyReport,
        monthlyReport,
        yearlyReport,
        activityTypes,
        userRole,
        allReport,
        reportTypes
      }) => {
        return (
          <Page style={styles.container}>
            <View style={styles.topView}>
              <View style={styles.informatinView}>
                <Text style={styles.dailyPriceText}>
                  {`${allReport[index].reduce(
                    (a, b) => a + parseInt(b.price, 10),
                    0,
                  )} ₺`}
                </Text>
                <Text>{`${reportTypes[index]} Toplam`}</Text>
              </View>
              <AreaChart
                style={styles.chart}
                data={monthlyReport.map(item => parseInt(item.price, 10))}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(100, 170, 255, 1)' }}
                gridMin={0}
              />
            </View>
            <View style={styles.bottomView}>
              <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                  daily: () => _reportTab(dailyReport, activityTypes, userRole),
                  monthly: () =>
                    _reportTab(monthlyReport, activityTypes, userRole),
                  yearly: () =>
                    _reportTab(yearlyReport, activityTypes, userRole),
                })}
                onIndexChange={i => setIndex(i)}
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
          </Page>
        );
      }}
    </ReportContainer>
  );
};

export default ActivityScreen;
