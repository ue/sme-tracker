import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import IconButton from '../../components/iconButton/iconButton.view';
import Page from '../../components/page/page.view';
import ProfileContainer from '../../containers/profile.container';
import styles from './profile.styles';

class ProfileScreen extends Component {
  state = {};

  render() {
    return (
      <ProfileContainer>
        {({ handleOnPreesEmployeesButton }) => (
          <Page style={styles.container}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://via.placeholder.com/90x90.png' }}
              />
              <Text style={styles.name}>Ugur Erdal</Text>
              <Text style={styles.indicatorText}>(Yonetici)</Text>
            </View>
            <View style={styles.bodyWrapper}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleOnPreesEmployeesButton}
              >
                <Icon style={styles.icon} name="user-tie" size={45} />
                <Text>Calisanlar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomWrapper}>
              <IconButton
                onPress={console.log('test :')}
                size={30}
                borderRadius={20}
                iconName="close"
                text="Cikis"
              />
            </View>
          </Page>
        )}
      </ProfileContainer>
    );
  }
}

export default ProfileScreen;
