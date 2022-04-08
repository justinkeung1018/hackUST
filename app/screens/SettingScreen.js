import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Touchable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function FilterLocationScreen({ navigation }) {
  
    const options = [
        {
            option: "Invite Friends",
            icon: "people-outline",
            key: "1",
        },
        {
            option: "General",
            icon: "settings-outline",
            key: "2",
        },
        {
            option: "Language",
            icon: "language-outline",
            key: "3",
        },
        {
            option: "Notification",
            icon: "notifications-outline",
            key: "4",
        },
        {
            option: "Sound",
            icon: "volume-high-outline",
            key: "5",
        },
        {
            option: "Privacy",
            icon: "lock-closed-outline",
            key: "6",
        },
        {
            option: "Security",
            icon: "shield-outline",
            key: "7",
        },
        {
            option: "Payment",
            icon: "card-outline",
            key: "8",
        },
        {
            option: "Account",
            icon: "person-outline",
            key: "9",
        },
        {
            option: "Help",
            icon: "help-circle-outline",
            key: "10",
        },
        {
            option: "About",
            icon: "information-circle-outline",
            key: "11",
        },
      ];

      
    return (
        <View style={[globalStyles.container, { minHeight: "100%" , paddingLeft: 0, paddingRight: 0}]}>
            <Text style={styles.titleText}>Settings</Text>
            <View style={styles.line}></View>
            <View style={styles.buttonMargin}>
                <FlatList
                    scrollEnabled={false}
                    data={options}
                    renderItem={({ item }) => (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonFlex}>
                            <View style={styles.iconContainer}>
                                <Ionicons name={item.icon} style={styles.icon}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.option}</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons
                                    name="chevron-forward-outline"
                                    style={styles.arrow}
                                />
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    )}
                />
            </View>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
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
      marginBottom: 25,
      fontSize: 30,
      fontFamily: "SF-Pro-Display-Bold",
      color: globalColors.black,
      alignSelf: "center",
      justifyContent: "center",
    },
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 7,
        marginBottom: 7,
    },
    buttonFlex: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: null,
        opacity: 1,
        flexDirection: "row",
        width: "100%",
    },
    icon: {
        fontSize: 30,
    },
    text: {
      fontFamily: "SF-Pro-Text-Regular",
      fontSize: 18,
    },
    arrow: {
        fontSize: 20,
        color: globalColors.gray,
    },
    iconContainer: {
        flex: 2,
        alignSelf: "center",
        justifyContent: "center",
    },
    textContainer: {
        flex: 10,
        alignSelf: "center",
        justifyContent: "center",
    },
    arrowContainer: {
        flex: 1,
        alignSelf: "flex-end",
        justifyContent: "center",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: globalColors.gray,
    },
    logoutButton: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    logoutText: {
        fontSize: 18,
        fontFamily: "SF-Pro-Display-Regular",
        color: globalColors.darkBlue,
    },
  });
  