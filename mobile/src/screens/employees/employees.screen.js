import React from 'react';
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

import EmployeesContainer from '../../containers/employees.container';

import styles from './employees.styles';

const _renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.listItemWrapper}
    onPress={() =>
      navigationService.navigate(ROUTES.SCREENS.CUSTOMER_DETAILS, item)
    }
  >
    <View style={styles.listItem}>
      <Icon style={styles.icon} name="account-circle-outline" size={35} />
      <Text style={styles.listItemText}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const _keyExtractor = item => item.id.toString();

const EmployeesScreen = ({ navigation }) => {
  return (
    <EmployeesContainer>
      {({ employees }) => (
        <Page style={styles.container}>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Ara..."
              onChangeText={value => console.log('value :', value)}
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.addEmployeesWrapper}>
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
            <Text style={styles.buttonTitle}>Yeni calisan ekle</Text>
          </TouchableOpacity>

          <Text style={styles.quickTitle}>Calisanlar</Text>
          <FlatList
            data={employees}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
        </Page>
      )}
    </EmployeesContainer>
  );
};

export default withNavigation(EmployeesScreen);
