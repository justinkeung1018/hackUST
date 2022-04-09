import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalColors } from "../assets/globalColors";
import { globalFonts } from "../assets/globalFonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyles } from "../assets/globalStyles";

class DetailsScreenRyze extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
  }
  renderImage() {
    let image = this.state.favorite ? "heart" : "heart-outline";
    return <Ionicons name={image} style={styles.heart} />;
  }
  render() {

  let { location, activity, price, time , day, hour} = this.props.route.params;
    
    return (
      <ScrollView style={{ backgroundColor: globalColors.white }}>
        <Image
          source={require("../assets/images/filter-cards/ryze.jpeg")}
          style={styles.image}
        />
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack({ location: location , activity: activity, price: price, time: time, day: day, hour: hour})}>
            <Ionicons name="chevron-back-outline" style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.filterHeartContainer}>
            <TouchableOpacity
              style={styles.filterContainer}
              onPress={() => this.props.navigation.navigate("FilterScreen", { location: location , activity: activity, price: price, time: time, day: day, hour: hour})}
            >
              <Image
                source={require("../assets/images/white_filter.png")}
                style={styles.filter}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ favorite: !this.state.favorite })}
            >
              {this.renderImage()}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.basicInfo}>
            <Text style={globalFonts.heading2}>Ryze Hong Kong</Text>
            <Text style={styles.info}>$$ · Quarry Bay · Trampoline</Text>
            <Text style={styles.open}>Open</Text>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardComponent}>
              <Image
                source={require("../assets/images/darkblue_map.png")}
                style={styles.icon}
              />
              <Text style={globalFonts.text}>
                3/F, Kodak House 1, 321 Java Rd, Quarry Bay
              </Text>
            </View>
            <View style={styles.infoCardComponent}>
              <Image
                source={require("../assets/images/darkblue_phone.png")}
                style={styles.icon}
              />
              <Text style={globalFonts.text}>+852 2337 8191</Text>
            </View>
            <View style={styles.infoCardComponent}>
              <Image
                source={require("../assets/images/darkblue_mail.png")}
                style={styles.icon}
              />
              <Text style={globalFonts.text}>jump@ryze.info</Text>
            </View>
            <View style={styles.infoCardComponentLast}>
              <Image
                source={require("../assets/images/darkblue_web.png")}
                style={styles.icon}
              />
              <Text style={globalFonts.text}>
                https://www.ryzehongkong.com/
              </Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeading}>
              <Image
                source={require("../assets/images/darkblue_clock.png")}
                style={styles.icon}
              />
              <Text style={styles.infoCardHeadingText}>Opening hours</Text>
            </View>
            <Text style={globalFonts.text}>
              · Mon - Thur: 1000 - 1800 {"\n"}· Fri - Sun: 0900 - 2100 {"\n"}·
              Public Holidays: 0900 - 2100
            </Text>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeading}>
              <Image
                source={require("../assets/images/darkblue_coin.png")}
                style={styles.icon}
              />
              <Text style={styles.infoCardHeadingText}>Price</Text>
            </View>
          </View>
          <View style={styles.sectionPhotos}>
            <View style={styles.sectionHeading}>
              <View style={styles.sectionHeadingStatic}>
                <Image
                  source={require("../assets/images/darkblue_coin.png")}
                  style={styles.icon}
                />
                <Text style={styles.sectionHeadingText}>Photos</Text>
              </View>
              <TouchableOpacity style={styles.sectionHeadingButton}>
                <Text style={styles.sectionHeadingButtonText}>
                  + Add photos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionReviews}>
            <View style={styles.sectionHeading}>
              <View style={styles.sectionHeadingStatic}>
                <Image
                  source={require("../assets/images/darkblue_coin.png")}
                  style={styles.icon}
                />
                <Text style={styles.sectionHeadingText}>Reviews</Text>
              </View>
              <TouchableOpacity style={styles.sectionHeadingButton}>
                <Text style={styles.sectionHeadingButtonText}>
                  + Add reviews
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = windowWidth;

const styles = StyleSheet.create({
  arrow: {
    color: globalColors.white,
    fontSize: 32,
  },
  basicInfo: {
    marginBottom: 10,
  },
  container: {
    marginTop: 30,
    paddingLeft: "8%",
    paddingRight: "8%",
    marginBottom: 30,
  },
  filter: {
    width: 30,
    height: 30,
  },
  filterContainer: {
    marginRight: 20,
  },
  filterHeartContainer: {
    flexDirection: "row",
  },
  heart: {
    width: 30,
    height: 30,
    color: globalColors.white,
    fontSize: 32,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  image: {
    width: windowWidth,
    height: windowHeight,
  },
  info: {
    marginTop: 10,
    marginBottom: 10,
    color: globalColors.gray,
  },
  infoCard: {
    backgroundColor: globalColors.lightBlue,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
  },
  infoCardComponent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoCardComponentLast: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoCardHeading: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoCardHeadingText: {
    fontFamily: "SF-Pro-Text-Bold",
    color: globalColors.darkBlue,
    fontSize: 18,
  },
  navBar: {
    position: "absolute",
    left: 30,
    top: 50,
    width: windowWidth - 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  navContent: {},
  open: {
    color: "green",
  },
  sectionHeading: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  sectionHeadingButton: {
    backgroundColor: globalColors.darkBlue,
    borderRadius: 100,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sectionHeadingButtonText: {
    color: globalColors.white,
  },
  sectionHeadingFlex: {
    flexDirection: "row",
    marginBottom: 10,
  },
  sectionHeadingStatic: {
    alignItems: "center",
    flexDirection: "row",
  },
  sectionHeadingText: {
    fontFamily: "SF-Pro-Text-Bold",
    fontSize: 18,
    color: globalColors.black,
  },
  sectionPhotos: {
    marginTop: 45,
    marginBottom: 30,
  },
  sectionReviews: {},
});

export default DetailsScreenRyze;
