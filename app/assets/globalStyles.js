import { StyleSheet } from "react-native";
import { globalColors } from "./globalColors";
import DropShadow from "react-native-drop-shadow";

export const globalStyles = StyleSheet.create({
  arrow: {
    fontSize: 32,
    color: globalColors.gray,
  },
  container: {
    paddingTop: 50,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 30,
    backgroundColor: globalColors.white,
  },
  interactiveShadow: {
    shadowColor: "#000",
    shadowOffset: { height: 4 },
    shadowRadius: 30,
    shadowOpacity: 0.01,
    elevation: 10,
  },
  section: {
    paddingTop: 25,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 30,
  },
});
