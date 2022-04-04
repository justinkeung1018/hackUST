import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ResultsScreen from "../app/screens/ResultsScreen";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import HomeScreen from "../app/screens/HomeScreen";
import FilterScreen from "../app/screens/FilterScreen";
import DetailsScreenRyze from "../app/screens/DetailsScreenRyze";

const screens = {
  ResultsScreen: {
    screen: ResultsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  FilterScreen: {
    screen: FilterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailsScreenRyze: {
    screen: DetailsScreenRyze,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
