import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ResultsScreen from "./app/screens/ResultsScreen";
import FilterScreen from "./app/screens/FilterScreen";
import HomeScreen from "./app/screens/HomeScreen";
import FilterLocationScreen from "./app/screens/FilterLocationScreen"; 
import DetailsScreenRyze from "./app/screens/DetailsScreenRyze";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";
import { globalColors } from "./app/assets/globalColors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="DetailsScreenRyze" component={DetailsScreenRyze} />
    </Stack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Pro-Display-Bold": require("./app/assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-BoldItalic": require("./app/assets/fonts/SF-Pro-Display-BoldItalic.otf"),
    "SF-Pro-Display-Regular": require("./app/assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-RegularItalic": require("./app/assets/fonts/SF-Pro-Display-RegularItalic.otf"),
    "SF-Pro-Text-Bold": require("./app/assets/fonts/SF-Pro-Text-Bold.otf"),
    "SF-Pro-Text-BoldItalic": require("./app/assets/fonts/SF-Pro-Text-BoldItalic.otf"),
    "SF-Pro-Text-Regular": require("./app/assets/fonts/SF-Pro-Text-Regular.otf"),
    "SF-Pro-Text-RegularItalic": require("./app/assets/fonts/SF-Pro-Text-RegularItalic.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: globalColors.darkBlue,
          tabBarInactiveTintColor: globalColors.darkGray,
          headerShown: false,
        })}
        style={styles.navBar}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={FilterScreen} />
        <Tab.Screen name="Favorites" component={DetailsScreenRyze} />
        <Tab.Screen name="Settings" component={DetailsScreenRyze} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
  },
});
