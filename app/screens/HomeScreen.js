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
import CircularProgress from "react-native-circular-progress-indicator";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  const [activity, setActivity] = useState([
    {
      activity: "Trampoline",
      benefits: "Circulation, bone health",
      image: require("../assets/images/ryze.jpeg"),
      details: "./DetailsScreenRyze",
      key: "1",
    },
    {
      activity: "Weight lifting",
      benefits: "Bone health",
      image: require("../assets/images/ryze.jpeg"),
      details: "./DetailsScreenRyze",
      key: "2",
    },
  ]);

  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={[globalStyles.container, styles.blueContainer]}>
        <View style={styles.welcomeBackContainer}>
          <Text style={globalFonts.largeText}>Welcome back,</Text>
          <Text style={[globalFonts.largeText, styles.nameText]}>
            Chris Wong
          </Text>
        </View>
        <View style={styles.progressFlex}>
          <CircularProgress
            value={300}
            radius={120}
            maxValue={500}
            activeStrokeColor={globalColors.darkBlue}
            inActiveStrokeColor={"#B7D4FD"}
            progressValueStyle={{ color: globalColors.darkBlue }}
          />
        </View>
        <View style={styles.buttonFlex}>
          <TouchableOpacity
            style={[styles.button, globalStyles.interactiveShadow]}
          >
            <Ionicons name="podium-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Statistics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, globalStyles.interactiveShadow]}
            onPress={() => navigation.navigate("LeaderboardScreen")}
          >
            <Ionicons name="trophy-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[globalStyles.container, { paddingTop: 25 }]}>
        <Text style={globalFonts.heading3Bold}>You might like</Text>
        <Text style={[globalFonts.largeText, styles.subheadingText]}>
          Based on your activity
        </Text>
        <FlatList
          data={activity}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardActivityText}>{item.activity}</Text>
              <Text style={styles.cardBenefitsText}>{item.benefits}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
        <View style={styles.line}></View>
        <Text style={globalFonts.heading3Bold}>More to discover</Text>
        <Text style={[globalFonts.largeText, styles.subheadingText]}>
          Based on your activity
        </Text>
        <FlatList
          data={activity}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardActivityText}>{item.activity}</Text>
              <Text style={styles.cardBenefitsText}>{item.benefits}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  card: {
    marginRight: 8,
  },
  cardActivityText: {
    marginTop: 8,
    marginBottom: 3,
  },
  cardBenefitsText: {
    color: globalColors.darkGray,
  },
  cardImage: {
    width: 170,
    height: 170,
    borderRadius: 5,
  },
  line: {
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    backgroundColor: globalColors.lightGray,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
    color: globalColors.darkBlue,
  },
  nameText: {
    fontFamily: "SF-Pro-Text-Bold",
  },
  progressFlex: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  subheadingText: {
    marginTop: 3,
    marginBottom: 12,
    letterSpacing: -0.4,
    color: globalColors.darkGray,
  },
});
