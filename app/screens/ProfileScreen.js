import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
    Dimensions,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class Leaderboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
        


		return (
            <View>
                <FlatList 
                    ListHeaderComponent={
                        <View>
                            <Image source={require("../assets/images/sea.jpg")} style={styles.topImage} />
                            <View style={styles.background}>
                                <View style={{height: 120}}>
                                    <View style={styles.infotitle}>
                                        <Text style = {styles.name}>Anson Lo</Text>
                                        <View style={styles.infosubtitle}>
                                            <Text style = {styles.level}>Level 10</Text>
                                            <View style={{marginLeft: 15}}></View>
                                            <Text style = {styles.score}>1200/1500</Text> 
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.title}>Weekly tasks</Text>
                                </View>
                            </View>
                            <Image source={require("../assets/images/avatars/ansonlo.jpg")} style={styles.profilePicture} />
                        </View>
                    }
                />
            </View>
		);
	}
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: globalColors.lightBlue,
        minHeight: "100%",
    },
    
    topImage: {
        height: 150,
        width: 390,
    },
    profilePicture :{
        position: "absolute",
        top: 96,
        left: windowWidth/2-54,
        height: 108,
        width: 108,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 3,
    },
    
    infotitle: {
        position: "absolute",
        top: 60,
        alignSelf: "center",
        flexDirection: "column",
    },
    name: {
        fontFamily: "SF-Pro-Display-Bold",
        fontSize: 24,
        alignSelf: "center",
    },
    infosubtitle: {
        flexDirection: "row",
    },
    level: {
        fontFamily: "SF-Pro-Display-Regular",
        fontSize: 13, 
        alignSelf: "center",
    },
    score: {
        fontFamily: "SF-Pro-Display-Regular",
        fontSize: 13, 
        alignSelf: "center",
        color: globalColors.darkGray,
    },

    title: {
        fontFamily: "SF-Pro-Display-Regular", 
        fontSize: 18, 
    }
});
