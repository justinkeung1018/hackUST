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
import { globalFonts } from "../assets/globalFonts";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function SelectLocationScreen({ navigation }) {
      
    return (
        <View style={globalStyles.container}>
            <View style={styles.title}>
                <TouchableOpacity
                onPress={() =>
                navigation.navigate("MapModalScreen", {place: "Testing Route"})}
                    style={styles.arrowContainer}
                >
                    <Ionicons name="chevron-back-outline" style={globalStyles.arrow} />
                </TouchableOpacity>
                <Text style={[globalFonts.heading3Bold, styles.title]}>Select a location</Text>
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
    title: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowContainer: {
        marginRight: 15
    },
  });
