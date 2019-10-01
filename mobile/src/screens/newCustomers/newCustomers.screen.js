import React, { useState } from 'react';
import { TextInput, View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../components/iconButton/iconButton.view';

import NewCustomerContainer from '../../containers/newCustomer.container';
import ROUTES from '../../constants/routeNames';
import styles from './newCustomers.styles';
import navigationService from '../../services/navigationService';

const CustomersScreen = () => {
  const [customerName, setCustomerName] = useState('');

  return (
    <NewCustomerContainer>
      {({ addCustomer }) => (
        <SafeAreaView style={styles.container}>
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
          />

          <TextInput
            onChangeText={value => console.log('value :', value)}
            style={[styles.customerInput, styles.notArea]}
            placeholder="Musteri notu"
            multiline
          />
          <View style={styles.bottomView}>
            <IconButton
              onPress={() => addCustomer({ customerName })}
              size={55}
              borderRadius={32}
              iconName="plus"
            />
          </View>
        </SafeAreaView>
      )}
    </NewCustomerContainer>
  );
};

export default CustomersScreen;
