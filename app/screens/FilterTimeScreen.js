import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const buttonContainerHeight = 55;

const maxTranslateY = -windowHeight * 0.8;

export default function FilterLocationScreen({ route, navigation }) {
  let { location, activity, price, time, day, hour } = route.params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Any");
  const [textDate, setTextDate] = useState("Any");
  const [textTime, setTextTime] = useState("Any");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    let currentDay = tempDate.getDate().toString().padStart(2, "0");
    let currentMonth = (tempDate.getMonth() + 1).toString().padStart(2, "0");
    let currentHour = tempDate.getHours().toString().padStart(2, "0");
    let currentMinute = tempDate.getMinutes().toString().padStart(2, "0");

    let fDate = currentDay + "/" + currentMonth + "/" + tempDate.getFullYear();
    let fTime = currentHour + ":" + currentMinute;
    setText(fTime + ", " + fDate);
    setTextDate(fDate);
    setTextTime(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={[globalStyles.container, styles.background]}>
      <Text style={styles.titleText}>Time</Text>
      <TouchableOpacity
        style={styles.buttonDateContainer}
        onPress={() => showMode("date")}
      >
        <View style={styles.buttonFlexContainer}>
          <View style={styles.buttonTitleContainer}>
            <Text style={styles.buttonTextContent}>Date</Text>
          </View>
          <View style={styles.buttonTextFlex}>
            <Text style={styles.buttonTextContent}>{textDate}</Text>
          </View>
          <View style={styles.buttonArrowContainer}>
            <Ionicons
              name="chevron-forward-outline"
              style={globalStyles.arrow}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTimeContainer}
        onPress={() => showMode("time")}
      >
        <View style={styles.buttonFlexContainer}>
          <View style={styles.buttonTitleContainer}>
            <Text style={styles.buttonTextContent}>Time</Text>
          </View>
          <View style={styles.buttonTextFlex}>
            <Text style={styles.buttonTextContent}>{textTime}</Text>
          </View>
          <View style={styles.buttonArrowContainer}>
            <Ionicons
              name="chevron-forward-outline"
              style={globalStyles.arrow}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDoneContainer}
        onPress={() =>
          navigation.navigate("FilterScreen", {
            location: location,
            activity: activity,
            price: price,
            time: text,
            Day: textDate,
            Hour: textTime,
          })
        }
      >
        <Text style={styles.buttonDoneContent}>Done</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          textID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={styles.picker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: globalColors.white,
  },
  buttonArrow: {
    fontSize: 30,
    color: globalColors.gray,
  },
  buttonArrowContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonMargin: {
    paddingTop: 50,
  },
  buttonDateContainer: {
    alignSelf: "center",
    justifyContent: "center",
    opacity: 1,
    flexDirection: "row",
    backgroundColor: globalColors.lightBlue,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 15,
  },
  buttonDoneContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 200,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    backgroundColor: globalColors.blue,
    borderRadius: 10,
  },
  buttonDoneContent: {
    fontSize: 14,
    fontFamily: "SF-Pro-Text-Regular",
    color: globalColors.white,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonFlexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonTextContent: {
    paddingTop: 22,
    paddingBottom: 22,
    fontSize: 14,
    fontFamily: "SF-Pro-Text-Regular",
    color: globalColors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonTimeContainer: {
    alignSelf: "center",
    justifyContent: "center",
    opacity: 1,
    flexDirection: "row",
    backgroundColor: globalColors.lightBlue,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTextFlex: {
    flex: 8,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonTitleContainer: {
    flex: 3,
    alignSelf: "center",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: globalColors.gray,
  },
  titleText: {
    marginTop: 50,
    fontSize: 30,
    fontFamily: "SF-Pro-Display-Bold",
    color: globalColors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  picker: {
    marginTop: -250,
  },
});
