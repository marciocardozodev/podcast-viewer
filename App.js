import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/HomeScreen';
import PodcastScreen from './src/PodcastScreen';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Podcast: { screen: PodcastScreen },
    
  
});

const App = createAppContainer(MainNavigator);

export default App;
