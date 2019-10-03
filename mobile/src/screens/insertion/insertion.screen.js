import React, { useState } from 'react';
import { TextInput, View, Picker, Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import InsertionContainer from '../../containers/insertion.container';

import IconButton from '../../components/iconButton/iconButton.view';

import styles from './insertion.styles';

const InsertionScreen = () => {
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [customerId, setCustomerId] = useState(null);

  const _closeButtonOnPress = defaultType => {
    setType(defaultType);
    setPrice(0);
    setCustomerName('');
    setCustomerNote('');
    setCustomerId(null);
  };

  return (
    <InsertionContainer>
      {({ fetchCustomers, insertActivity, customers, activityTypes }) => (
        <View style={styles.container}>
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
              value={price.toString()}
              onChangeText={value => setPrice(value)}
              style={styles.textInput}
              keyboardType="number-pad"
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
        </View>
      )}
    </InsertionContainer>
  );
};

export default InsertionScreen;
