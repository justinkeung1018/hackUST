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
            <TouchableOpacity
            onPress={() =>
              navigation.navigate("MapModalScreen", {place: "Testing Route"})}
                style={styles.arrowContainer}
            >
                <Ionicons name="chevron-back-outline" style={globalStyles.arrow} />
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
    arrowContainer: {}
  });
