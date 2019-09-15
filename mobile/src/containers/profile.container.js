import { Component } from 'react';

class ProfileContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return children && children();
  }
}

export default ProfileContainer;
