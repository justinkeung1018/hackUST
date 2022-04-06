import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const buttonContainerHeight = 55;

const maxTranslateY = -windowHeight * 0.8;

export default function FilterLocationScreen({ route, navigation }) {
  let { location, activity, price, time } = route.params;
  
  const [typeofactivity, setTypeofactivity] = useState([
    { typeofactivity: "Any", key: "0" },
    { typeofactivity: "Archery", key: "1" },
    { typeofactivity: "Badminton", key: "2" },
    { typeofactivity: "Basketball", key: "3" },
    { typeofactivity: "Bowling", key: "4" },
    { typeofactivity: "Canoeing", key: "5" },
    { typeofactivity: "Climbing", key: "6" },
    { typeofactivity: "Combat Sports", key: "7" },
    { typeofactivity: "Cricket", key: "8" },
    { typeofactivity: "Cycling", key: "9" },
    { typeofactivity: "Dance", key: "10" },
    { typeofactivity: "Dodgeball", key: "11" },
    { typeofactivity: "Fencing", key: "12" },
    { typeofactivity: "Golf", key: "13" },
    { typeofactivity: "Gym", key: "14" },
    { typeofactivity: "Gymnastics", key: "15" },
    { typeofactivity: "Handball", key: "16" },
    { typeofactivity: "High Jump", key: "17" },
    { typeofactivity: "Horse Racing", key: "18" },
    { typeofactivity: "Ice Hockey", key: "19" },
    { typeofactivity: "Ice Skating", key: "20" },
    { typeofactivity: "Long Jump", key: "21" },
    { typeofactivity: "Mixed Martial Arts", key: "22" },
    { typeofactivity: "Pole", key: "23" },
    { typeofactivity: "Rowing", key: "24" },
    { typeofactivity: "Rugby", key: "25" },
    { typeofactivity: "Sailing", key: "26" },
    { typeofactivity: "Scuba Diving", key: "27" },
    { typeofactivity: "Skateboard", key: "28" },
    { typeofactivity: "Soccer", key: "29" },
    { typeofactivity: "Surfing", key: "30" },
    { typeofactivity: "Swimming", key: "31" },
    { typeofactivity: "Table Tennis", key: "32" },
    { typeofactivity: "Tennis", key: "33" },
    { typeofactivity: "Trampoline", key: "34" },
    { typeofactivity: "Volleyball", key: "35" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.titleText}>Activity</Text>
      <View style={styles.buttonMargin}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={typeofactivity}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  navigation.navigate("FilterScreen", { location: location , activity: item.typeofactivity, price: price, time: time })
                }
              >
                <Text style={styles.buttonText}>{item.typeofactivity}</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },
  titleText: {
    position: "absolute",
    top: 0.05 * window.height,
    fontSize: 30,
    fontFamily: "SF-Pro-Display-Bold",
    color: globalColors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonMargin: {
    paddingTop: 0.15 * window.height,
  },
  buttonContainer: {
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: null,
    opacity: 1,
    width: "100%",
    height: buttonContainerHeight,
  },
  buttonText: {
    fontFamily: "SF-Pro-Text-Regular",
    fontSize: 18,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#c4c4c4",
    alignSelf: "center",
  },
});
