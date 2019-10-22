import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../../components/iconButton/iconButton.view';
import navigationService from '../../services/navigationService';
import Page from '../../components/page/page.view';

import ROUTES from '../../constants/routeNames';

import CustomersContainer from '../../containers/customers.container';

import styles from './customers.styles';

const _renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.listItemWrapper}
    onPress={() =>
      navigationService.navigate(ROUTES.SCREENS.CUSTOMER_DETAILS, item)
    }
  >
    <View style={styles.listItem}>
      <Icon style={styles.icon} name="account-circle-outline" size={35} />
      <Text style={styles.listItemText}>{
          item.name &&
          item.name.charAt(0).toUpperCase() + item.name.substr(1).toLowerCase()
        }
      </Text>
    </View>
  </TouchableOpacity>
);

const _keyExtractor = item => item.id.toString();

const CustomersScreen = ({ navigation }) => {
  const [filter, setFilter] = useState('');

  return (
    <CustomersContainer>
      {({ customers }) => (
        <Page style={styles.container}>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Ara..."
              onChangeText={value => setFilter(value)}
              style={styles.searchInput}
              autoCorrect={false}
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
            data={customers.filter(
              item => item.name.indexOf(filter.toLowerCase()) > -1,
            )}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
        </Page>
      )}
    </CustomersContainer>
  );
};

export default withNavigation(CustomersScreen);
