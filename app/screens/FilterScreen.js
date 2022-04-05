import React, {Component} from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../assets/globalStyles";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FilterLocationScreen } from "./FilterLocationScreen";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const buttonContainerHeight = 62;

class FilterScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { location } = this.props.route.params == undefined ? 'Error' : this.props.route.params;
    
    return (
        <View style={globalStyles.container}>
          <Text style={styles.titleText}>Filters</Text>
          <View style={styles.buttonMargin}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('FilterLocationScreen')}>
              <View style={styles.buttonFlexContainer}>
                <View style={styles.buttonTextContainer}>
                  <Text style={styles.buttonTextTitle}>Location</Text>
                    <Text style={styles.buttonTextContent}>{JSON.stringify(location).replace(/['"]+/g, '')}</Text>
                </View>
                <View style={styles.buttonArrowContainer}>
                  <Text style={styles.buttonArrow}>{">"}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.buttonContainer}>
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
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.buttonContainer}>
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
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.buttonContainer}>
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
            <View style={styles.line}></View>
          </View>
        </View>
    );
  };
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
  buttonMargin: {
    paddingTop: 0.15*window.height,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: null,
    opacity: 1,
    width: "100%",
    height: buttonContainerHeight,
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
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#c4c4c4',
    alignSelf: 'center',
},
});

export default FilterScreen;
