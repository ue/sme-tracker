import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import IconButton from '../../components/iconButton/iconButton.view';

import NewEmployeeContainer from '../../containers/newEmployee.container';
import Page from '../../components/page/page.view';

import styles from './newEmployee.styles';

const NewEmployeeScreen = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _setUsername = text => {
    if (text.indexOf(' ') < 0) {
      setUsername(text);
    }
  };

  const _setPassword = text => {
    if (text.indexOf(' ') < 0) {
      setPassword(text);
    }
  };

  return (
    <NewEmployeeContainer>
      {({ addEmployee }) => (
        <Page style={styles.container}>
          <TextInput
            onChangeText={value => setEmployeeName(value)}
            style={styles.employeeInput}
            placeholder="Ad soyad giriniz"
          />
          <TextInput
            value={username}
            onChangeText={value => _setUsername(value.toLowerCase())}
            style={styles.employeeInput}
            placeholder="Kullanici adi giriniz"
          />
          <TextInput
            value={password}
            onChangeText={value => _setPassword(value)}
            style={styles.employeeInput}
            secureTextEntry
            placeholder="Kullanicinin sifresini giriniz"
          />
          <View style={styles.bottomView}>
            <IconButton
              onPress={() => addEmployee({ employeeName, username, password })}
              size={55}
              borderRadius={32}
              iconName="plus"
            />
          </View>
        </Page>
      )}
    </NewEmployeeContainer>
  );
};

export default NewEmployeeScreen;
