import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../assets/globalStyles";
import BottomSheet from "../assets/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const buttonContainerHeight = 62;

function FilterScreen({ navigation }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>Filters</Text>
        <TouchableOpacity activeOpacity={1} style={styles.buttonContainer}>
          <View style={styles.buttonFlexContainer}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextTitle}>Location</Text>
              <Text style={styles.buttonTextContent}>Taikoo Shing</Text>
            </View>
            <View style={styles.buttonArrowContainer}>
              <Text style={styles.buttonArrow}>{">"}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.buttonContainer,
            { top: 0.15 * window.height + buttonContainerHeight * 1 },
          ]}
        >
          <View style={styles.buttonFlexContainer}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextTitle}>Type of activity</Text>
              <Text style={styles.buttonTextContent}>Badminton</Text>
            </View>
            <View style={styles.buttonArrowContainer}>
              <Text style={styles.buttonArrow}>{">"}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.buttonContainer,
            { top: 0.15 * window.height + buttonContainerHeight * 2 },
          ]}
        >
          <View style={styles.buttonFlexContainer}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextTitle}>Price</Text>
              <Text style={styles.buttonTextContent}>Any</Text>
            </View>
            <View style={styles.buttonArrowContainer}>
              <Text style={styles.buttonArrow}>{">"}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.buttonContainer,
            { top: 0.15 * window.height + buttonContainerHeight * 3 },
          ]}
        >
          <View style={styles.buttonFlexContainer}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextTitle}>Time</Text>
              <Text style={styles.buttonTextContent}>Any</Text>
            </View>
            <View style={styles.buttonArrowContainer}>
              <Text style={styles.buttonArrow}>{">"}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheet />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },
  buttonArrow: {
    fontSize: 30,
    color: "#c4c4c4",
  },
  buttonArrowContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    top: 0.15 * window.height,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: null,
    opacity: 1,
    width: "100%",
    height: buttonContainerHeight,
    borderColor: "#c4c4c4",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  buttonFlexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonTextContainer: {
    flex: 12,
    flexDirection: "column",
  },
  buttonTextContent: {
    padding: 3,
    fontSize: 14,
    fontFamily: "SF-Pro-Display-Regular",
    color: "grey",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  buttonTextTitle: {
    padding: 3,
    fontSize: 18,
    fontFamily: "SF-Pro-Display-Regular",
    color: "black",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  titleText: {
    position: "absolute",
    top: 0.05 * window.height,
    fontSize: 30,
    fontFamily: "SF-Pro-Display-Bold",
    color: "black",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default FilterScreen;
