import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

import ProfileContainer from '../../containers/profile.container';
import styles from './profile.styles';

class ProfileScreen extends Component {
  state = {};

  render() {
    return (
      <ProfileContainer>
        {() => (
          <View style={styles.container}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://via.placeholder.com/90x90.png' }}
              />
              <Text style={styles.name}>Ugur Erdal</Text>
              <Text style={styles.indicatorText}>(Yonetici)</Text>
            </View>
            <View style={styles.bodyWrapper}>
              <Button title="Cikis" />
            </View>
          </View>
        )}
      </ProfileContainer>
    );
  }
}

export default ProfileScreen;
