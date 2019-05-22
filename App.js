import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Profile from './components/Profile';
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;