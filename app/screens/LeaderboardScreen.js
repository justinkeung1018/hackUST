import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Leaderboard({ navigation }) {
  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={[globalStyles.container, styles.blueContainer]}>
        <View style={styles.headerFlex}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FilterScreen")}
            >
              <Ionicons
                name="chevron-back-outline"
                style={globalStyles.arrow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={globalFonts.title}>Leaderboard</Text>
          </View>
          <View style={styles.emptyFlexContainer}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    flex: 1,
  },
  backgroundColor: {
    backgroundColor: globalColors.white,
  },
  blueContainer: {
    backgroundColor: globalColors.lightBlue,
  },
  button: {
    backgroundColor: "#C4DAF9",
    width: 167,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonFlex: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontFamily: "SF-Pro-Text-Bold",
    fontSize: 15,
    color: globalColors.darkBlue,
  },
  emptyFlexContainer: {
    flex: 1,
  },
  headerFlex: {
    flexDirection: "row",
  },
  nameText: {
    fontFamily: "SF-Pro-Text-Bold",
  },
  titleContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
