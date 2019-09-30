import React, { useState } from 'react';
import { TextInput, View, Picker, Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import InsertionContainer from '../../containers/insertion.container';

import IconButton from '../../components/iconButton/iconButton.view';

import styles from './insertion.styles';

const InsertionScreen = () => {
  const [type, setType] = useState('Java');
  const [price, setPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  const _closeButtonOnPress = () => {
    setType('Java');
    setPrice(0);
    setCustomerName('');
    setCustomerNote('');
  };

  return (
    <InsertionContainer>
      {({ fetchCustomers, insertActivity, customers }) => (
        <View style={styles.container}>
          <View style={styles.topView}>
            <Picker
              selectedValue={type}
              style={styles.picker}
              onValueChange={value => setType(value)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Java" value="java1" />
              <Picker.Item label="JavaScript" value="js1" />
              <Picker.Item label="Java" value="java2" />
              <Picker.Item label="JavaScript" value="js2" />
            </Picker>
            <TextInput
              value={`${price.toString()}₺`}
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
                  }}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
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
