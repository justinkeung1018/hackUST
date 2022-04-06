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

export default function FilterLocationScreen({ navigation }) {
  const [district, setDistrict] = useState([
    { district: "Any", key: "0" },
    { district: "Central and Western District", key: "1" },
    { district: "East District", key: "2" },
    { district: "Islands District", key: "3" },
    { district: "Kowloon City District", key: "4" },
    { district: "Kwai Tsing District", key: "5" },
    { district: "Kwun Tong District", key: "6" },
    { district: "North District", key: "7" },
    { district: "Sai Kung District", key: "8" },
    { district: "Sha Tin District", key: "9" },
    { district: "Sham Shui Po District", key: "10" },
    { district: "Southern District", key: "11" },
    { district: "Tai Po District", key: "12" },
    { district: "Tsuen Wan District", key: "13" },
    { district: "Tuen Mun District", key: "14" },
    { district: "Wan Chai District", key: "15" },
    { district: "Wong Tai Sin District", key: "16" },
    { district: "Yau Tsim Mong District", key: "17" },
    { district: "Yuen Long District", key: "18" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.titleText}>Location</Text>
      <View style={styles.buttonMargin}>
        <FlatList
          data={district}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  navigation.navigate("FilterScreen", { location: item.district })
                }
              >
                <Text style={styles.buttonText}>{item.district}</Text>
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
