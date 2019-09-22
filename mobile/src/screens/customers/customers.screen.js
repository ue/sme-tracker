import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../../components/iconButton/iconButton.view';

import ROUTES from '../../constants/routeNames';

import ActivityContainer from '../../containers/activity.container';

import styles from './customers.styles';

const CUSTOMER_DATA = [
  {
    name: 'Ugur Erdal',
    icon: '',
    avatar: 'https://via.placeholder.com/150',
    id: 1,
  },
  { name: 'Erdal', icon: '', avatar: 'https://via.placeholder.com/150', id: 2 },
  {
    name: 'Mustafa',
    icon: '',
    avatar: 'https://via.placeholder.com/150',
    id: 3,
  },
  { name: 'Ahmet', icon: '', avatar: 'https://via.placeholder.com/150', id: 4 },
  {
    name: 'Mehmet',
    icon: '',
    avatar: 'https://via.placeholder.com/150',
    id: 5,
  },
  {
    name: 'Julide',
    icon: '',
    avatar: 'https://via.placeholder.com/150',
    id: 6,
  },
  { name: 'Necla', icon: '', avatar: 'https://via.placeholder.com/150', id: 7 },
];

class CustomersScreen extends Component {
  state = {};

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItemWrapper}>
      <View style={styles.listItem}>
        <Icon style={styles.icon} name="account-circle-outline" size={35} />
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  _keyExtractor = item => item.id.toString();

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Ara..."
            onChangeText={value => this.setState({ price: value })}
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.addCustomerWrapper}>
          <IconButton
            onPress={() =>
              navigation.navigate({
                routeName: ROUTES.SCREENS.NEW_CUSTOMER,
              })
            }
            size={32}
            borderRadius={20}
            iconName="plus"
            color="#4A98F7"
            backgroundColor="white"
          />
          <Text style={styles.buttonTitle}>Yeni müşteri ekle</Text>
        </TouchableOpacity>

        <Text style={styles.quickTitle}>Müşteriler</Text>
        <FlatList
          data={CUSTOMER_DATA}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(CustomersScreen);
