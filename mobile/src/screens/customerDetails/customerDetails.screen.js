import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';

import navigationService from '../../services/navigationService';
import ROUTES from '../../constants/routeNames';
import Page from '../../components/page/page.view';

import styles from './customerDetails.styles';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

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
              {item.employee.name}
            </Text>
            <Text style={styles.date}>
              ({item.createdAt.toDate().toLocaleDateString('tr-TR', options)})
            </Text>
          </View>
          <Text style={styles.listItemText}>{item.type}</Text>
          <Text style={styles.listItemText}>{item.customerNote}</Text>
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

        <Text style={styles.quickTitle}>{navigationParams.name}</Text>
        <FlatList
          data={navigationParams.activities}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Page>
    );
  }
}

export default withNavigation(CustomersScreen);
