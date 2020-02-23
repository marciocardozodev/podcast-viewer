import React from 'react';
import { View, Button, Text } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Bem vindo',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button title="Ver meus podcasts" onPress={() => navigate('Podcast')} />
      );
    }
  }

 export default HomeScreen 
  