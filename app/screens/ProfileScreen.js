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

const weeklyTask = [
    {
        task: "Go to 2 sports venues",
        point: "200 points",
        number: "1/2",
        image: require("../assets/images/badges/adventurer.png"),
        key: "1"
    },
    {
        task: "Do sports for 4 days",
        point: "400 points",
        number: "2/4",
        image: require("../assets/images/badges/schedule.png"),
        key: "2"
    },
    {
        task: "Do 2 types of sports",
        point: "300 points",
        number: "1/2",
        image: require("../assets/images/badges/explorer.png"),
        key: "3"
    },        
]

const badges = [
    {
        name: "Loyalty I",
        detail: "Did the same sports activity 4 times",
        image: require("../assets/images/badges/badge_1_1.png"),
        key: "1"
    },
    {
        name: "Explorer I",
        detail: "Tried 4 different sports activities",
        image: require("../assets/images/badges/badge_1_2.png"),
        key: "2"
    },
    {
        name: "Adventurer I",
        detail: "Went to 4 different sports venues",
        image: require("../assets/images/badges/badge_1_3.png"),
        key: "3"
    },
    {
        name: "Adventurer I",
        detail: "Spent 8 hours doing sports",
        image: require("../assets/images/badges/badge_1_4.png"),
        key: "4"
    },
    {
        name: "Strong-willed I",
        detail: "Did sports for 2 consecutive days",
        image: require("../assets/images/badges/badge_1_5.png"),
        key: "5"
    },
    {
        name: "Growth I",
        detail: "Reach Level 2",
        image: require("../assets/images/badges/badge_1_6.png"),
        key: "6"
    },
]

export default class Leaderboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
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
                                <View style={[globalStyles.container, {paddingTop: 20, backgroundColor: globalColors.lightBlue}]}>
                                    <Text style={styles.title}>Weekly tasks</Text>
                                    <View style={styles.weeklyTaskContainer}>
                                        <FlatList
                                            scrollEnabled={false}
                                            data={weeklyTask}
                                            renderItem={({ item }) => (
                                                <View style={{backgroundColor: "white"}}>
                                                <TouchableOpacity style={styles.weeklyTaskButtonContainer}>
                                                    <View>
                                                        <Image source={item.image} style={styles.taskimage}/>
                                                    </View>
                                                    <View style={styles.weeklyTaskWordContainer}>
                                                        <Text style={styles.task}>{item.task}</Text>
                                                        <Text style={styles.point}>{item.point}</Text>
                                                    </View>
                                                    <View style={styles.weeklyTaskNumberContainer}>
                                                        <Text style={styles.number}>{item.number}</Text>
                                                    </View>
                                                    <View style={styles.weeklyTaskArrowContainer}>
                                                        <Ionicons
                                                        name="chevron-forward-outline"
                                                        style={styles.arrow}
                                                        />
                                                    </View>     
                                                </TouchableOpacity>
                                                </View>
                                            )} 
                                            style={{borderRadius:10, overflow: 'hidden'}}
                                            listKey="1"
                                        />
                                    </View>
                                    <Text style={styles.title}>Badges</Text>
                                    <Text style={styles.subtitle}>Beginner</Text>
                                    <View style={styles.badgeContainer}>
                                        <FlatList />
                                        <FlatList
                                            scrollEnabled={false}
                                            data={badges}
                                            renderItem={({ item }) => (
                                                <View style={{backgroundColor: "white"}}>
                                                <TouchableOpacity style={styles.weeklyTaskButtonContainer}>
                                                    <View style={globalStyles.interactiveShadow}>
                                                        <Image source={item.image} style={styles.badge}/>
                                                    </View>                                                    
                                                </TouchableOpacity>
                                                </View>
                                            )} 
                                            numColumns={3}
                                            style={{borderRadius:10, overflow: 'hidden'}}
                                            listKey="2"
                                        />
                                    </View>
                                </View>
                            </View>
                            <Image source={require("../assets/images/avatars/ansonlo.jpg")} style={styles.profileimage} />
                            
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
    profileimage :{
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
    },
    subtitle: {
        fontFamily: "SF-Pro-Display-Regular", 
        fontSize: 13, 
        color: globalColors.darkGray,
    },
    weeklyTaskContainer: {
        marginTop: 7,
        marginBottom: 31,
    },
    weeklyTaskButtonContainer: {
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: "white",
        flexDirection: "row",
    },
    weeklyTaskImageContainer: {
        flex: 1,
    },
    weeklyTaskWordContainer: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 7,
    },
    weeklyTaskNumberContainer: {
        justifyContent: "center",
        flex: 1,
    },
    weeklyTaskArrowContainer: {
        justifyContent: "center",
        flex: 1,
    },
    taskimage: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    task: {
        fontFamily: "SF-Pro-Display-Bold",
        fontSize: 13,
    },
    point: {
        fontFamily: "SF-Pro-Display-Regular",
        fontSize: 13,
        color: globalColors.darkGray,
    },
    number: {
        fontFamily: "SF-Pro-Display-Regular",
        fontSize: 13,
        color: globalColors.darkGray,
    },
    arrow: {
        fontSize: 20,
        color: globalColors.gray,
    },

    badgeContainer: {
        marginTop: 7,
        marginBottom: 31,
    },
    badge: {
        height: 100,
        width: 100,
        margin: ((windowWidth-48)/3-100)/2, 
        borderRadius: 100,
    },
    badgeShadow: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5
    }
});
