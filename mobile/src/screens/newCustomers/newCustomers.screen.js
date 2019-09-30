import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import IconButton from '../../components/iconButton/iconButton.view';

import ActivityContainer from '../../containers/activity.container';
import ROUTES from '../../constants/routeNames';
import styles from './newCustomers.styles';
import navigationService from '../../services/navigationService';

class CustomersScreen extends Component {
  state = {};

  _keyExtractor = item => item.id.toString();

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Icon
          style={styles.icon}
          name="arrow-left"
          size={35}
          onPress={() => navigationService.navigate(ROUTES.TABBAR.CUSTOMERS)}
        />

        <Text style={styles.quickTitle}>Yeni Musteri</Text>

        <TextInput
          onChangeText={value => this.setState({ customerId: value })}
          style={styles.customerInput}
          placeholder="Musteri adi giriniz"
        />

        <TextInput
          onChangeText={value => this.setState({ customerNote: value })}
          style={[styles.customerInput, styles.notArea]}
          placeholder="Musteri notu"
          multiline
        />
        <View style={styles.bottomView}>
          <IconButton
            onPress={() => navigationService.navigate(ROUTES.TABBAR.CUSTOMERS)}
            size={55}
            borderRadius={32}
            iconName="plus"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(CustomersScreen);
