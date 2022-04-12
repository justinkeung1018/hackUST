import React, { useCallback, useRef, useState, Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import { globalFonts } from "../assets/globalFonts";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

let helperArray = require("../assets/location.json");

export default class SelectLocationScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          allLocations: helperArray,
          locationsFiltered: helperArray,
      };
  }

  searchLocation (textToSearch) {
    this.setState({
        locationsFiltered: this.state.allLocations.filter( i => i.name.toLowerCase().includes(textToSearch))
    })
  }

  render() {
    let { place } = this.props.route.params; 

    return (
        <View style={[globalStyles.container, styles.background]}>
            <View style={styles.title}>
                <TouchableOpacity
                onPress={() =>
                this.props.navigation.navigate("MapModalScreen", {place: place})}
                    style={styles.arrowContainer}
                >
                    <Ionicons name="chevron-back-outline" style={globalStyles.arrow} />
                </TouchableOpacity>
                <Text style={[globalFonts.heading3Bold, styles.title]}>Select a location</Text>
            </View>

            <View style={styles.searchBox}>
                 <TextInput 
                    style={styles.input} 
                    placeholder="Find a location" 
                    onChangeText={text => {this.searchLocation(text)}}
                />
                 <Ionicons name="search-outline" style={styles.search}/>
            </View>

            <View style={styles.locationList}>
                    <FlatList
                    scrollEnabled={false}
                    data={this.state.locationsFiltered}
                    renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("MapModalScreen", {place: item.name})}
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={styles.text}>{item.name}</Text>
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
    background: {
      flex: 1,
      minHeight: windowHeight,
      width: windowWidth,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowContainer: {
        marginRight: 15
    },
    search: {
        fontSize: 20,
        color: globalColors.darkGray,
        position: "absolute",
        top: 11,
        left: 10
    },
    searchBox: {
        marginTop: 41,
        marginBottom: 14,
    },
    input: {
        borderRadius: 10,
        fontSize: 18,
        fontFamily: "SF-Pro-Text-Regular",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 35,
        backgroundColor: globalColors.lightGray,
    },
    locationList: {

    },
    buttonContainer: {
        marginTop: 13,
        marginBottom: 13,
    },
    buttonFlex: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: null,
        opacity: 1,
        flexDirection: "row",
        width: "100%",
    },
    text: {
        fontFamily: "SF-Pro-Text-Regular",
        fontSize: 18,
      },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: globalColors.gray,
      },
  });

  