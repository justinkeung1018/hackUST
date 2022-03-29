import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ResultsScreen from '../app/screens/ResultsScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import HomeScreen from '../app/screens/HomeScreen';


const screens = {
    ResultsScreen: {
        screen: ResultsScreen
    },  
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);