import React, { useState, useEffect } from 'react';
import { TextInput, View, Picker, Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import InsertionContainer from '../../containers/insertion.container';

import IconButton from '../../components/iconButton/iconButton.view';
import Page from '../../components/page/page.view';

import styles from './insertion.styles';

const InsertionScreen = () => {
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [customerId, setCustomerId] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const _closeButtonOnPress = defaultType => {
    setType(defaultType);
    setPrice(0);
    setCustomerName('');
    setCustomerNote('');
    setCustomerId(null);
  };

  useEffect(() => {
    if (customerName && price && parseInt(price, 10) !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [customerName, price]);
  const numReg = /^\d+$/;

  return (
    <InsertionContainer>
      {({ fetchCustomers, insertActivity, customers, activityTypes }) => (
        <Page style={styles.container}>
          <View style={styles.topView}>
            <Picker
              selectedValue={type ? type : setType(activityTypes[0].key)}
              style={styles.picker}
              onValueChange={value => setType(value)}
            >
              {activityTypes.map(item => (
                <Picker.Item
                  key={item.key}
                  label={item.text}
                  value={item.key}
                />
              ))}
            </Picker>
            <TextInput
              value={price && price.toString()}
              onChangeText={value => numReg.test(value) ? setPrice(value) : !value && setPrice(value)}
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="0"
              autoCorrect={false}
            />
          </View>

          <View style={styles.middleView}>
            <Text style={styles.quickTitle}>Musteri Bilgileri</Text>

            <Autocomplete
              inputContainerStyle={styles.autocomplete}
              data={customers}
              renderTextInput={() => (
                <TextInput
                  value={customerName}
                  onChangeText={value => {
                    setCustomerName(value);
                    fetchCustomers(value);
                  }}
                  style={styles.customerInput}
                  placeholder="Musteri adi giriniz"
                  autoCorrect={false}
                />
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setCustomerName(item.name);
                    fetchCustomers();
                    setCustomerId(item.id);
                  }}
                >
                  <Text key={item.id} style={styles.itemText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TextInput
              value={customerNote}
              onChangeText={value => setCustomerNote(value)}
              style={[styles.customerInput, styles.notArea]}
              placeholder="Musteri notu"
              multiline
            />
          </View>

          <View style={styles.bottomView}>
            <IconButton
              onPress={() =>
                insertActivity({
                  type,
                  price,
                  customerName,
                  customerNote,
                  customerId,
                  callback: () => _closeButtonOnPress(activityTypes[0].key),
                })
              }
              size={55}
              borderRadius={32}
              iconName="plus"
              disabled={!isValid}
            />
            <IconButton
              onPress={_closeButtonOnPress}
              size={30}
              borderRadius={20}
              iconName="close"
              color="#4A98F7"
              backgroundColor="white"
            />
          </View>
        </Page>
      )}
    </InsertionContainer>
  );
};

export default InsertionScreen;
