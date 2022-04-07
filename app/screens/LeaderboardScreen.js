import React, { Component } from "react";
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

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTimePressed: true,
      thisWeekPressed: false,
      thisMonthPressed: false,
    };
  }

  render() {
    const allTimeData = [
      {
        name: "Anson Lo",
        score: 791000,
        image: require("../assets/images/ansonlo.jpg"),
        key: "1",
      },
      {
        name: "Keung To",
        score: 791000,
        image: require("../assets/images/keungto.jpg"),
        key: "2",
      },
      {
        name: "Edan Lui",
        score: 580000,
        image: require("../assets/images/edanlui.jpg"),
        key: "3",
      },
      {
        name: "Anson Lo",
        score: 8300,
        image: require("../assets/images/ansonlo.jpg"),
        key: "4",
      },
      {
        name: "Anson Lo",
        score: 8300,
        image: require("../assets/images/ansonlo.jpg"),
        key: "5",
      },
      {
        name: "Anson Lo",
        score: 8300,
        image: require("../assets/images/ansonlo.jpg"),
        key: "6",
      },
      {
        name: "Anson Lo",
        score: 8300,
        image: require("../assets/images/ansonlo.jpg"),
        key: "7",
      },
      {
        name: "Anson Lo",
        score: 8300,
        image: require("../assets/images/ansonlo.jpg"),
        key: "8",
      },
    ];

    return (
      <View>
        <FlatList
          style={[
            styles.backgroundColor,
            globalStyles.section,
            { minHeight: "100%" },
          ]}
          ListHeaderComponent={
            <View>
              <View
                style={[
                  globalStyles.container,
                  styles.blueContainer,
                  {
                    marginLeft: -24,
                    marginRight: -24,
                    marginBottom: -30, // Something went wrong so there is extra margin below the top three leaderboard
                    paddingBottom: 0,
                  },
                ]}
              >
                <View style={styles.headerFlex}>
                  <View style={styles.arrowContainer}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.goBack()}
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
                <View
                  style={[styles.buttonFlex, globalStyles.interactiveShadow]}
                >
                  <TouchableOpacity
                    style={[
                      styles.button,
                      this.state.allTimePressed
                        ? styles.buttonPressed
                        : styles.buttonUnpressed,
                    ]}
                    onPress={() =>
                      this.setState({
                        allTimePressed: true,
                        thisWeekPressed: false,
                        thisMonthPressed: false,
                      })
                    }
                  >
                    <Text
                      style={
                        this.state.allTimePressed
                          ? styles.buttonTextPressed
                          : styles.buttonTextUnpressed
                      }
                    >
                      All time
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      this.state.thisWeekPressed
                        ? styles.buttonPressed
                        : styles.buttonUnpressed,
                    ]}
                    onPress={() =>
                      this.setState({
                        allTimePressed: false,
                        thisWeekPressed: true,
                        thisMonthPressed: false,
                      })
                    }
                  >
                    <Text
                      style={
                        this.state.thisWeekPressed
                          ? styles.buttonTextPressed
                          : styles.buttonTextUnpressed
                      }
                    >
                      This week
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      this.state.thisMonthPressed
                        ? styles.buttonPressed
                        : styles.buttonUnpressed,
                    ]}
                    onPress={() =>
                      this.setState({
                        allTimePressed: false,
                        thisWeekPressed: false,
                        thisMonthPressed: true,
                      })
                    }
                  >
                    <Text
                      style={
                        this.state.thisMonthPressed
                          ? styles.buttonTextPressed
                          : styles.buttonTextUnpressed
                      }
                    >
                      This month
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.podiumFlex}>
                  <View style={styles.podiumSilver}>
                    <View style={styles.podiumImageShadow}>
                      <Image
                        style={styles.podiumSilverImage}
                        source={require("../assets/images/edanlui.jpg")}
                      />
                    </View>
                  </View>
                  <View style={styles.podiumGold}>
                    <View style={styles.podiumImageShadow}>
                      <Image
                        style={styles.podiumGoldImage}
                        source={require("../assets/images/ansonlo.jpg")}
                      />
                    </View>
                  </View>
                  <View style={styles.podiumBronze}>
                    <View style={styles.podiumImageShadow}>
                      <Image
                        style={styles.podiumBronzeImage}
                        source={require("../assets/images/keungto.jpg")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={globalStyles.section}></View>
            </View>
          }
          data={allTimeData}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardContentLeft}>
                  <Text style={[styles.cardRankingText, globalFonts.text]}>
                    {item.key}
                  </Text>
                  <Image style={styles.cardImage} source={item.image} />
                  <Text style={globalFonts.text}>{item.name}</Text>
                </View>
                <View style={styles.cardScore}>
                  <Text style={globalFonts.text}>{item.score}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
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
    width: 102,
    height: 33,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: globalColors.blue,
  },
  buttonTextPressed: {
    color: globalColors.white,
  },
  buttonTextUnpressed: {
    color: globalColors.black,
  },
  buttonUnpressed: {
    backgroundColor: globalColors.lightBlue,
  },
  buttonFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: globalColors.white,
    padding: 6,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "SF-Pro-Text-Bold",
    fontSize: 15,
    color: globalColors.darkBlue,
  },
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: globalColors.lightGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContentLeft: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 42,
    height: 42,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100,
  },
  cardRankingText: {},
  emptyFlexContainer: {
    flex: 1,
  },
  cardScore: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerFlex: {
    flexDirection: "row",
  },
  nameText: {
    fontFamily: "SF-Pro-Text-Bold",
  },
  podiumBronze: {
    width: 80,
    height: 93,
    backgroundColor: "#dfba96",
  },
  podiumBronzeImage: {
    position: "absolute",
    top: -40,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "#CD7F32",
    borderWidth: 3,
  },
  podiumFlex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 77,
  },
  podiumGold: {
    width: 108,
    height: 133,
    backgroundColor: "#f5e09b",
    marginLeft: 16,
    marginRight: 16,
  },
  podiumGoldImage: {
    position: "absolute",
    top: -54,
    width: 108,
    height: 108,
    borderRadius: 100,
    borderColor: "#fcbe06",
    borderWidth: 3,
  },
  podiumImageShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 14,
    shadowOpacity: 0.1,
  },
  podiumSilver: {
    width: 80,
    height: 103,
    backgroundColor: "#c4c4c4",
  },
  podiumSilverImage: {
    position: "absolute",
    top: -40,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "#767676",
    borderWidth: 3,
  },
  titleContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});
