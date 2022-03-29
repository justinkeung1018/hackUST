import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ResultsScreen from './app/screens/ResultsScreen';
import Navigator from './routes/homeStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    'SF-Pro-Display-Bold': require('./app/assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-BoldItalic': require('./app/assets/fonts/SF-Pro-Display-BoldItalic.otf'),
    'SF-Pro-Display-Regular': require('./app/assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-RegularItalic': require('./app/assets/fonts/SF-Pro-Display-RegularItalic.otf'),
    'SF-Pro-Text-Bold': require('./app/assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-BoldItalic': require('./app/assets/fonts/SF-Pro-Text-BoldItalic.otf'),
    'SF-Pro-Text-Regular': require('./app/assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-RegularItalic': require('./app/assets/fonts/SF-Pro-Text-RegularItalic.otf'),
});

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}