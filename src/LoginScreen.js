import React from 'react';
import { View, Button, Text } from 'react-native';
import { AuthSession } from 'expo'


class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button title="Login with Spotify" onPress={login()} />
      );
    }
  }

 export default LoginScreen 
  