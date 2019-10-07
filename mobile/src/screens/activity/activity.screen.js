import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import Page from '../../components/page/page.view';

import ActivityContainer from '../../containers/activity.container';

import styles from './activity.styles';

const LIST_DATA = [
  { name: 'Sac Kesimi', price: 20, icon: '', id: 1 },
  { name: 'Sac Kesimi', price: 10, icon: '', id: 2 },
  { name: 'Sac Kesimi', price: 30, icon: '', id: 3 },
  { name: 'Sac Kesimi', price: 10, icon: '', id: 4 },
  { name: 'Sac Kesimi', price: 20, icon: '', id: 5 },
];

const _renderItem = ({ item, userRole }) => (
  <View style={styles.listItemView}>
    <View style={styles.listItemLeft}>
      <Icon style={styles.icon} name="content-cut" size={35} />
      <View>
        {userRole === 'admin' && <Text>{item.employee.name}</Text>}
        <Text>{item.type}</Text>
        <Text>{item.customer.name}</Text>
      </View>
    </View>
    <View>
      <Text>{item.price}</Text>
    </View>
  </View>
);

const _renderListPlaceHolder = () => (
  <View style={styles.listItemView}>
    <Placeholder Animation={Fade} Left={PlaceholderMedia}>
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
  </View>
);

const _renderHeader = (dailyTotal, monthlyTotal) => (
  <View style={styles.informationView}>
    <Text style={styles.dailyPriceText}>{`${dailyTotal} ₺`}</Text>
    <Text>Gunluk</Text>
  </View>
);

const _renderHeaderPlaceHolder = () => (
  <View style={styles.informationView}>
    <Placeholder Animation={Fade}>
      <PlaceholderLine width={30} style={styles.center} />
      <Text style={styles.center}>Gunluk</Text>
      <PlaceholderLine width={30} style={styles.center} />
      <Text style={styles.center}>Aylik</Text>
    </Placeholder>
  </View>
);

const _keyExtractor = item => item.id.toString();

const ActivityScreen = () => {
  return (
    <ActivityContainer>
      {({ activities, userRole }) => {
        const data = activities.length > 0 ? activities : LIST_DATA;
        const dailyTotal = data.reduce((a, b) => a + parseInt(b.price, 10), 0);
        return (
          <Page style={styles.container}>
            <View style={styles.topView}>
              {activities.length > 0
                ? _renderHeader(dailyTotal, 1000)
                : _renderHeaderPlaceHolder()}
              <AreaChart
                style={styles.chart}
                data={data.map(item => parseInt(item.price, 10))}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(100, 170, 255, 1)' }}
                gridMin={0}
              />
            </View>
            <View style={styles.bottomView}>
              <FlatList
                data={data}
                keyExtractor={_keyExtractor}
                renderItem={
                  activities.length > 0
                    ? ({ item }) => _renderItem({ item, userRole })
                    : _renderListPlaceHolder
                }
              />
            </View>
          </Page>
        );
      }}
    </ActivityContainer>
  );
};

export default ActivityScreen;
