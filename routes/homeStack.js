import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ResultsScreen from '../app/screens/ResultsScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import HomeScreen from '../app/screens/HomeScreen';


const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },  
    ResultsScreen: {
        screen: ResultsScreen,
        navigationOptions: {
            header: null,
        }
    },  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);