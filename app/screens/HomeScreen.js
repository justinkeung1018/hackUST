import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
	Touchable,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import CircularProgress from "react-native-circular-progress-indicator";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { points } = this.props.route.params;
		const activityYouMightLike = [
			{
				activity: "Trampoline",
				benefits: "Circulation, bone health",
				image: require("../assets/images/sports-categories/trampoline.jpg"),
				details: "ResultsScreen",
				key: "1",
			},
			{
				activity: "Weight lifting",
				benefits: "Muscle strength",
				image: require("../assets/images/sports-categories/weight-lifting.jpg"),
				details: "DetailsScreenRyze",
				key: "2",
			},
			{
				activity: "Swimming",
				benefits: "Circulation",
				image: require("../assets/images/sports-categories/swimming.jpg"),
				details: "DetailsScreenRyze",
				key: "3",
			},
		];

		const activityMoreToDiscover = [
			{
				activity: "Badminton",
				benefits: "Mobility, coordination",
				image: require("../assets/images/sports-categories/badminton.jpg"),
				details: "DetailsScreenRyze",
				key: "1",
			},
			{
				activity: "Table tennis",
				benefits: "Mobility, coordination",
				image: require("../assets/images/sports-categories/table-tennis.jpg"),
				details: "DetailsScreenRyze",
				key: "2",
			},
			{
				activity: "Tennis",
				benefits: "Mobility, coordination",
				image: require("../assets/images/sports-categories/tennis.jpg"),
				details: "DetailsScreenRyze",
				key: "3",
			},
		];

		return (
			<ScrollView style={styles.backgroundColor}>
				<View style={[globalStyles.container, styles.blueContainer]}>
					<View style={styles.topBarFlex}>
						<View style={styles.welcomeBackContainer}>
							<Text style={globalFonts.largeText}>Welcome back,</Text>
							<Text style={[globalFonts.largeText, styles.nameText]}>
								Chris Wong
							</Text>
						</View>
						<View style={styles.topBarButtonsFlex}>
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate("LeaderboardScreen")
								}
							>
								<Ionicons name="trophy-outline" style={styles.icon} />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate("StatisticsScreen")
								}
							>
								<Ionicons name="podium-outline" style={styles.icon} />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate("ProfileScreen")}
							>
								<Ionicons name="person-circle-outline" style={styles.icon} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.progressFlex}>
						<CircularProgress
							value={1200 + points}
							radius={120}
							maxValue={1500}
							title={"1500 to level up"}
							titleColor={globalColors.black}
							titleStyle={[globalFonts.largeText, { marginTop: -5 }]}
							activeStrokeColor={globalColors.darkBlue}
							inActiveStrokeColor={"#B7D4FD"}
							progressValueStyle={{
								fontFamily: "SF-Pro-Display-Bold",
								fontSize: 64,
								color: globalColors.black,
							}}
						/>
					</View>
					<TouchableOpacity
						style={styles.startButton}
						onPress={() => this.props.navigation.navigate("MapScreen")}
					>
						<Text style={styles.startButtonText}>Start</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.section, { paddingTop: 25 }]}>
					<Text style={globalFonts.heading3Bold}>You might like</Text>
					<Text style={[globalFonts.largeText, styles.subheadingText]}>
						Based on your activity
					</Text>
				</View>
				<FlatList
					showsHorizontalScrollIndicator={false}
					data={activityYouMightLike}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={
								item.key === "1"
									? styles.firstCard
									: item.key === "3"
									? styles.lastCard
									: styles.card
							}
							onPress={() => this.props.navigation.navigate(item.details)}
						>
							<Image source={item.image} style={styles.cardImage} />
							<Text style={styles.cardActivityText}>{item.activity}</Text>
							<Text style={styles.cardBenefitsText}>{item.benefits}</Text>
						</TouchableOpacity>
					)}
					horizontal={true}
				/>
				<View style={styles.line}></View>
				<View style={styles.section}>
					<Text style={globalFonts.heading3Bold}>More to discover</Text>
					<Text style={[globalFonts.largeText, styles.subheadingText]}>
						Based on your activity
					</Text>
				</View>
				<FlatList
					showsHorizontalScrollIndicator={false}
					data={activityMoreToDiscover}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={
								item.key === "1"
									? styles.firstCard
									: item.key === "3"
									? styles.lastCard
									: styles.card
							}
							onPress={() => this.props.navigation.navigate(item.details)}
						>
							<Image source={item.image} style={styles.cardImage} />
							<Text style={styles.cardActivityText}>{item.activity}</Text>
							<Text style={styles.cardBenefitsText}>{item.benefits}</Text>
						</TouchableOpacity>
					)}
					horizontal={true}
				/>
			</ScrollView>
		);
	}
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
	firstCard: {
		marginRight: 8,
		marginLeft: 24,
	},
	lastCard: {
		marginRight: 24,
	},
	line: {
		height: 1,
		marginTop: 20,
		marginBottom: 20,
		width: "100%",
		backgroundColor: globalColors.lightGray,
	},
	icon: {
		fontSize: 32,
		marginLeft: 12,
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
	section: {
		paddingLeft: 24,
		paddingRight: 24,
	},
	startButton: {
		backgroundColor: "#C4DAF9",
		borderRadius: 100,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 15,
		paddingBottom: 15,
		marginTop: 30,
	},
	startButtonText: {
		fontFamily: "SF-Pro-Display-Bold",
		fontSize: 23,
		color: globalColors.darkBlue,
	},
	subheadingText: {
		marginTop: 3,
		marginBottom: 12,
		letterSpacing: -0.4,
		color: globalColors.darkGray,
	},
	suggestionsFlatlist: {
		position: "absolute",
		left: 20,
	},
	topBarFlex: {
		flexDirection: "row",
		alignItems: "center",
	},
	topBarButtonsFlex: {
		flexDirection: "row",
	},
	welcomeBackContainer: {
		flex: 3,
	},
});
