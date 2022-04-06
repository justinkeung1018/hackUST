import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../assets/globalStyles";
import { globalColors } from "../assets/globalColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalFonts } from "../assets/globalFonts";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const buttonContainerHeight = 62;

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { location, activity, price, time } = this.props.route.params;

    const options = [
      {
        option: "Location",
        screen: "FilterLocationScreen",
        param: location,
        key: "1",
      },
      {
        option: "Activity",
        screen: "FilterActivityScreen",
        param: activity,
        key: "2",
      },
      { 
        option: "Price", 
        screen: "FilterPriceScreen", 
        param: price, 
        key: "3" 
      },
      { 
        option: "Time", 
        screen: "FilterTimeScreen", 
        param: time, 
        key: "4" },
    ];

    return (
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>Filters</Text>
        <View style={styles.buttonMargin}>
          <FlatList
            scrollEnabled={false}
            data={options}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate(item.screen, {location: location, activity: activity, price: price, time: time})}
                >
                  <View style={styles.buttonFlexContainer}>
                    <View style={styles.buttonTextContainer}>
                      <Text
                        style={[globalFonts.largeText, styles.buttonTextTitle]}
                      >
                        {item.option}
                      </Text>
                      <Text style={[styles.buttonTextContent]}>
                        {JSON.stringify(item.param).replace(/['"]+/g, "")}
                      </Text>
                    </View>
                    <View style={styles.buttonArrowContainer}>
                      <Ionicons
                        name="chevron-forward-outline"
                        style={styles.arrow}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.line}></View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    fontSize: 32,
    color: globalColors.gray,
  },
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
  buttonMargin: {
    paddingTop: 0.03 * window.height,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    opacity: 1,
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
    paddingTop: 3,
    paddingBottom: 7,
    fontSize: 14,
    fontFamily: "SF-Pro-Text-Regular",
    color: globalColors.darkGray,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  buttonTextTitle: {
    paddingTop: 7,
    fontSize: 18,
  },
  titleText: {
    marginTop: 50,
    fontSize: 30,
    fontFamily: "SF-Pro-Display-Bold",
    color: globalColors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: globalColors.gray,
  },
});
