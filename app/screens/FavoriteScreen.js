import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalStyles } from "../assets/globalStyles";
import Card from "../assets/components/card";
import { globalColors } from "../assets/globalColors";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FavoriteScreen({ route, navigation }) {
  let { location, activity, price, time, day, hour } = route.params;

  const [venue, setVenue] = useState([
    {
      name: "Ryze Hong Kong",
      price: "2",
      location: "Quarry Bay",
      type: "Trampoline",
      image: require("../assets/images/filter-cards/ryze.jpeg"),
      details: "./DetailsScreenRyze",
      rating: "4.5",
      open: true,
      favorite: false,
      key: "1",
    },
    {
      name: "Bounce Inc",
      price: "2",
      location: "Kowloon Bay",
      type: "Trampoline",
      image: require("../assets/images/filter-cards/bounce.jpg"),
      details: "./DetailsScreenRyze",
      rating: "4.2",
      open: false,
      favorite: false,
      key: "2",
    },
  ]);

  return (
    <View style={[globalStyles.container , { minHeight: "100%" }]}>
      <View style={styles.titleBar}>
        <View style={styles.results}>
            <Text style={styles.titleText}>Favorites ({Object.keys(venue).length})</Text>
        </View>
      </View>
      <FlatList
        data={venue}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailsScreenRyze", {
                location: location,
                activity: activity,
                price: price,
                time: time,
                day: day,
                hour: hour,
              })
            }
          >
            <Card info={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    fontSize: 32,
  },
  arrowContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 30,
    width: 30,
  },
  results: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleBar: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 13,
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
});
