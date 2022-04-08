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

export default function ResultsScreen({ route, navigation }) {
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
      image: require("../assets/images/filter-cards/ryze.jpeg"),
      details: "./DetailsScreenRyze",
      rating: "4.2",
      open: false,
      favorite: false,
      key: "2",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <View style={styles.titleBar}>
        <View style={styles.results}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FilterScreen", {
                location: location,
                activity: activity,
                price: price,
                time: time,
                day: day,
                hour: hour,
              })
            }
            style={styles.arrowContainer}
          >
            <Ionicons name="chevron-back-outline" style={styles.arrow} />
          </TouchableOpacity>
          <Text style={[globalFonts.heading3Bold, styles.title]}>
            Results ({Object.keys(venue).length})
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ResultsScreen", {
              location: location,
              activity: activity,
              price: price,
              time: time,
              day: day,
              hour: hour,
            })
          }
        >
          <Image
            style={styles.image}
            source={require("../assets/images/black_filter.png")}
          />
        </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 13,
  },
});
