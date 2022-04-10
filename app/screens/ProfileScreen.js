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
                <Image source={require("../assets/images/sea.jpg")} style={styles.topImage}></Image>
                <View style={styles.background}>
                    
                </View>
                
                <Image source={require("../assets/images/avatars/ansonlo.jpg")} style={styles.profilePicture}></Image>
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
        height: 173,
        width: 390,
    },
    profilePicture :{
        position: "absolute",
        top: 119,
        left: windowWidth/2-54,
        height: 108,
        width: 108,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 3,
    }
});
