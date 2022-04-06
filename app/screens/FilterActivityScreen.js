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
    { typeofactivity: "Trampoline", key: "1" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.titleText}>Location</Text>
      <View style={styles.buttonMargin}>
        <FlatList
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
