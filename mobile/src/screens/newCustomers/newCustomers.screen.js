import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../../components/iconButton/iconButton.view';

import ActivityContainer from '../../containers/activity.container';

import styles from './newCustomers.styles';
import navigationService from '../../services/navigationService';

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

          <IconButton
            onPress={() => navigation.goBack()}
            size={32}
            borderRadius={20}
            iconName="arrow-left"
            color="#4A98F7"
            backgroundColor="white"
          />

        <Text style={styles.quickTitle}>yeni musteri</Text>
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
