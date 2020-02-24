import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

class PodcastScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      PodcasList: [
        { key: 'Jovem Nerd' },
        { key: 'Rocketseat' },
        { key: 'Lambda3' },
        { key: 'Estadio 97' },
        { key: 'Fala Bandana' },
        { key: 'Resenha Tricolor' },
        { key: 'Teste 1' },
        { key: 'Teste 2' },
        { key: 'TEste 3' },
        { key: 'Teste 5' },
        { key: 'Teste 6' },
        { key: 'Teste 7' },
        { key: 'Teste 8' },
        { key: 'Teste 9' },
        { key: 'Teste 10' },
        { key: 'Teste 11' }
      ]
    }
  }
  
  async componentDidMount() {
    // const response = await fetch()
    // const responseJson = await response.json()
    // this.setState({PodcasList: responseJson.data.results})
  }

  static navigationOptions = {
    title: 'Lista de Podcasts',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Voltar para home" onPress={() => navigate('Home')} />
        <FlatList
          data={this.state.PodcasList}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default PodcastScreen
