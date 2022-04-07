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
  let { location, activity, price, time , day, hour} = route.params;

  const [money, setMoney] = useState([
    { money: "Any", key: "0" },
    { money: "$", key: "1" },
    { money: "$$", key: "2" },
    { money: "$$$", key: "3" },
    { money: "$$$$", key: "4" },
  ]);

  return (
    <View style={[globalStyles.container, { minHeight: "100%" }]}>
      <Text style={styles.titleText}>Price</Text>
      <View style={styles.buttonMargin}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={money}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  navigation.navigate("FilterScreen", { location: location , activity: activity, price: item.money, time: time, day: day, hour: hour})
                }
              >
                <Text style={styles.buttonText}>{item.money}</Text>
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
    marginTop: 50,
    fontSize: 30,
    fontFamily: "SF-Pro-Display-Bold",
    color: globalColors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonMargin: {
    paddingTop: 0.03 * window.height,
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
