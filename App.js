import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ResultsScreen from "./app/screens/ResultsScreen";
import Navigator from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
      <Navigator />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "list-outline" : "list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
        style={styles.navBar}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
  },
});
