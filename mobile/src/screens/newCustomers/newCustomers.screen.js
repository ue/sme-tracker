import React, { useState } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../components/iconButton/iconButton.view';

import NewCustomerContainer from '../../containers/newCustomer.container';
import ROUTES from '../../constants/routeNames';
import styles from './newCustomers.styles';
import navigationService from '../../services/navigationService';
import Page from '../../components/page/page.view';

const CustomersScreen = () => {
  const [customerName, setCustomerName] = useState('');

  return (
    <NewCustomerContainer>
      {({ addCustomer }) => (
        <Page style={styles.container}>
          <Icon
            style={styles.icon}
            name="arrow-left"
            size={35}
            onPress={() => navigationService.navigate(ROUTES.TABBAR.CUSTOMERS)}
          />

          <Text style={styles.quickTitle}>Yeni Musteri</Text>

          <TextInput
            onChangeText={value => setCustomerName(value)}
            style={styles.customerInput}
            placeholder="Musteri adi giriniz"
            autoCorrect={false}
          />

          <TextInput
            onChangeText={value => console.log('value :', value)}
            style={[styles.customerInput, styles.notArea]}
            placeholder="Musteri notu"
            multiline
            autoCorrect={false}
          />
          <View style={styles.bottomView}>
            <IconButton
              onPress={() => {
                if (customerName) {
                  addCustomer({ customerName });
                  Alert.alert("Eklendi")
                }
              }}
              disabled={!customerName}
              size={55}
              borderRadius={32}
              iconName="plus"
            />
          </View>
        </Page>
      )}
    </NewCustomerContainer>
  );
};

export default CustomersScreen;
