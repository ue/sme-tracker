import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';

import navigationService from '../../services/navigationService';
import ROUTES from '../../constants/routeNames';
import Page from '../../components/page/page.view';

import styles from './customerDetails.styles';

const CUSTOMER_NOTES = [
  {
    employee: 'Kubra gun',
    note:
      'Sac boyandi boya renk: #333342 Sac boyandi boya renk: #333342. Manikur yapildi fon cekildi. Oje kodu #343434',
    date: '21 Mart 2019',
    id: 1,
  },
  {
    employee: 'Gokhan',
    note: 'Rofle yapildi',
    date: '8 Ocak 2019',
    id: 1,
  },
  {
    employee: 'Ugur Erdal',
    note: 'Manikur ve agda yapildi',
    date: '15 Haziran 2019',
    id: 1,
  },
];

class CustomersScreen extends Component {
  state = {
    navigationParams: this.props.navigation.state.params,
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItemWrapper}>
      <View style={styles.listItem}>
        <Icon style={styles.icon} name="content-cut" size={35} />
        <View>
          <View style={styles.employeeWrapper}>
            <Text style={[styles.listItemText, styles.employeeName]}>
              {item.employee}
            </Text>
            <Text style={styles.date}>({item.date})</Text>
          </View>
          <Text style={styles.listItemText}>{item.note}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  _keyExtractor = item => item.id.toString();

  render() {
    const { navigationParams } = this.state;

    return (
      <Page style={styles.container}>
        <Icon
          style={styles.backIcon}
          name="arrow-left"
          size={35}
          onPress={() => navigationService.navigate(ROUTES.TABBAR.CUSTOMERS)}
        />

        <Text style={styles.quickTitle}>{navigationParams.name} Hanim</Text>
        <FlatList
          data={CUSTOMER_NOTES}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Page>
    );
  }
}

export default withNavigation(CustomersScreen);
