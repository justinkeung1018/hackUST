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
import FilterActivityScreen from "./app/screens/FilterActivityScreen";
import FilterPriceScreen from "./app/screens/FilterPriceScreen";
import FilterTimeScreen from "./app/screens/FilterTimeScreen";
import DetailsScreenRyze from "./app/screens/DetailsScreenRyze";
import LeaderboardScreen from "./app/screens/LeaderboardScreen";
import StatisticsScreen from "./app/screens/StatisticsScreen";
import SettingScreen from "./app/screens/SettingScreen";
import FavoriteScreen from "./app/screens/FavoriteScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

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
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      <Stack.Screen name="StatisticsScreen" component={StatisticsScreen} />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        initialParams={{
          location: "Any",
          activity: "Any",
          price: "Any",
          time: "Any",
          day: "Any",
          hour: "Any",
        }}
      />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function Filter() {
  return (
    <Stack.Navigator
      initialRouteName="FilterScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        initialParams={{
          location: "Any",
          activity: "Any",
          price: "Any",
          time: "Any",
          day: "Any",
          hour: "Any",
        }}
      />
      <Stack.Screen
        name="FilterLocationScreen"
        component={FilterLocationScreen}
      />
      <Stack.Screen
        name="FilterActivityScreen"
        component={FilterActivityScreen}
      />
      <Stack.Screen name="FilterPriceScreen" component={FilterPriceScreen} />
      <Stack.Screen name="FilterTimeScreen" component={FilterTimeScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="DetailsScreenRyze" component={DetailsScreenRyze} />
    </Stack.Navigator>
  );
}

function Main() {
  return (
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
      <Tab.Screen name="Search" component={Filter} />
      <Tab.Screen 
        name="Favorites" 
        component={FavoriteScreen} 
        initialParams={{
          location: "Any",
          activity: "Any",
          price: "Any",
          time: "Any",
          day: "Any",
          hour: "Any",
        }}
        />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Pro-Display-Bold": require("./app/assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-BoldItalic": require("./app/assets/fonts/SF-Pro-Display-BoldItalic.otf"),
    "SF-Pro-Display-Regular": require("./app/assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-RegularItalic": require("./app/assets/fonts/SF-Pro-Display-RegularItalic.otf"),
    "SF-Pro-Display-Medium": require("./app/assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Display-MediumItalic": require("./app/assets/fonts/SF-Pro-Display-MediumItalic.otf"),
    "SF-Pro-Text-Bold": require("./app/assets/fonts/SF-Pro-Text-Bold.otf"),
    "SF-Pro-Text-BoldItalic": require("./app/assets/fonts/SF-Pro-Text-BoldItalic.otf"),
    "SF-Pro-Text-Regular": require("./app/assets/fonts/SF-Pro-Text-Regular.otf"),
    "SF-Pro-Text-RegularItalic": require("./app/assets/fonts/SF-Pro-Text-RegularItalic.otf"),
    "SF-Pro-Text-Medium": require("./app/assets/fonts/SF-Pro-Text-Medium.otf"),
    "SF-Pro-Text-MediumItalic": require("./app/assets/fonts/SF-Pro-Text-MediumItalic.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navTheme = {
    colors: {
      background: "white",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
