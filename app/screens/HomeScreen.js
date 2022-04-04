import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ResultsScreen")}>
        <Text>Press me to go to search results</Text>
      </TouchableOpacity>
    </View>
  );
}
