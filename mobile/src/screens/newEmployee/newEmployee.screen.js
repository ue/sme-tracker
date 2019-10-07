import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import IconButton from '../../components/iconButton/iconButton.view';

import NewEmployeeContainer from '../../containers/newEmployee.container';
import Page from '../../components/page/page.view';

import styles from './newEmployee.styles';

const NewEmployeeScreen = () => {
  const [employeeName, setEmployeeName] = useState('');

  return (
    <NewEmployeeContainer>
      {({ addEmployee }) => (
        <Page style={styles.container}>
          <TextInput
            onChangeText={value => setEmployeeName(value)}
            style={styles.employeeInput}
            placeholder="Musteri adi giriniz"
          />
          <View style={styles.bottomView}>
            <IconButton
              onPress={() => addEmployee({ employeeName })}
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
