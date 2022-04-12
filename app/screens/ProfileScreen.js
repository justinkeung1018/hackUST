import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Image,
	Dimensions,
	Modal,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import BadgeModal from "../assets/components/badgeModal";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const weeklyTask = [
	{
		task: "Go to 2 sports venues",
		point: "200 points",
		number: "1/2",
		image: require("../assets/images/badges/adventurer.png"),
		key: "1",
	},
	{
		task: "Do sports for 4 days",
		point: "400 points",
		number: "2/4",
		image: require("../assets/images/badges/schedule.png"),
		key: "2",
	},
	{
		task: "Do 2 types of sports",
		point: "300 points",
		number: "1/2",
		image: require("../assets/images/badges/explorer.png"),
		key: "3",
	},
];

const beginnerbadges = [
	{
		name: "Loyalty I",
		detail: "Did the same sports activity 4 times",
		image: require("../assets/images/badges/badge_1_1_shadow.png"),
		key: "1",
	},
	{
		name: "Explorer I",
		detail: "Tried 4 different sports activities",
		image: require("../assets/images/badges/badge_1_2_shadow.png"),
		key: "2",
	},
	{
		name: "Adventurer I",
		detail: "Went to 4 different sports venues",
		image: require("../assets/images/badges/badge_1_3_shadow.png"),
		key: "3",
	},
	{
		name: "Adventurer I",
		detail: "Spent 8 hours doing sports",
		image: require("../assets/images/badges/badge_1_4_shadow.png"),
		key: "4",
	},
	{
		name: "Strong-willed I",
		detail: "Did sports for 2 consecutive days",
		image: require("../assets/images/badges/badge_1_5_shadow.png"),
		key: "5",
	},
	{
		name: "Growth I",
		detail: "Reach Level 5",
		image: require("../assets/images/badges/badge_1_6_shadow.png"),
		key: "6",
	},
];

const intermediatebadges = [
	{
		name: "Loyalty II",
		detail: "Did the same sports activity 20 times",
		image: require("../assets/images/badges/badge_2_1_shadow.png"),
		key: "1",
	},
	{
		name: "Explorer II",
		detail: "Tried 10 different sports activities",
		image: require("../assets/images/badges/badge_2_2_shadow.png"),
		key: "2",
	},
	{
		name: "Adventurer II",
		detail: "Went to 20 different sports venues",
		image: require("../assets/images/badges/badge_2_3_shadow.png"),
		key: "3",
	},
	{
		name: "Adventurer II",
		detail: "Spent 20 hours doing sports",
		image: require("../assets/images/badges/badge_2_4_shadow.png"),
		key: "4",
	},
	{
		name: "Strong-willed II",
		detail: "Did sports for 7 consecutive days",
		image: require("../assets/images/badges/badge_2_5_shadow.png"),
		key: "5",
	},
	{
		name: "Growth II",
		detail: "Reach Level 10",
		image: require("../assets/images/badges/badge_2_6_shadow.png"),
		key: "6",
	},
];

const expertbadges = [
	{
		name: "Loyalty III",
		detail: "Did the same sports activity 580 times",
		image: require("../assets/images/badges/badge_3_1_shadow.png"),
		key: "1",
	},
	{
		name: "Explorer III",
		detail: "Tried 25 different sports activities",
		image: require("../assets/images/badges/badge_3_2_shadow.png"),
		key: "2",
	},
	{
		name: "Adventurer III",
		detail: "Went to 50 different sports venues",
		image: require("../assets/images/badges/badge_3_3_shadow.png"),
		key: "3",
	},
	{
		name: "Adventurer III",
		detail: "Spent 200 hours doing sports",
		image: require("../assets/images/badges/badge_3_4_shadow.png"),
		key: "4",
	},
	{
		name: "Strong-willed III",
		detail: "Did sports for 20 consecutive days",
		image: require("../assets/images/badges/badge_3_5_shadow.png"),
		key: "5",
	},
	{
		name: "Growth III",
		detail: "Reach Level 30",
		image: require("../assets/images/badges/badge_3_6_shadow.png"),
		key: "6",
	},
];

export default class Leaderboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
	}
	renderBadge(item) {
		return <BadgeModal badge={item} />;
	}
	setModalVisible() {
		this.setState({ modalVisible: true });
	}

	render() {
		const { modalVisible } = this.state;
		return (
			<View>
				<FlatList
					ListHeaderComponent={
						<View>
							<Image
								source={require("../assets/images/sea.jpg")}
								style={styles.topImage}
							/>
							<View style={styles.background}>
								<View style={{ height: 120 }}>
									<View style={styles.infotitle}>
										<Text style={styles.name}>Anson Lo</Text>
										<View style={styles.infosubtitle}>
											<Text style={styles.level}>Level 10</Text>
											<View style={{ marginLeft: 15 }}></View>
											<Text style={styles.score}>1200/1500</Text>
										</View>
									</View>
								</View>
								<View
									style={[
										globalStyles.container,
										{ paddingTop: 20, backgroundColor: globalColors.lightBlue },
									]}
								>
									<Text style={styles.title}>Weekly tasks</Text>
									<View style={styles.weeklyTaskContainer}>
										<FlatList
											scrollEnabled={false}
											data={weeklyTask}
											renderItem={({ item }) => (
												<View style={{ backgroundColor: "white" }}>
													<TouchableOpacity
														style={styles.weeklyTaskButtonContainer}
													>
														<View>
															<Image
																source={item.image}
																style={styles.taskimage}
															/>
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
											style={{ borderRadius: 10, overflow: "hidden" }}
											listKey="1"
										/>
									</View>
									<Text style={styles.title}>Badges</Text>
									<Text style={styles.subtitle}>Beginner</Text>
									<View style={styles.badgeContainer}>
										<FlatList
											scrollEnabled={false}
											data={beginnerbadges}
											renderItem={({ item }) => this.renderBadge(item)}
											columnWrapperStyle={styles.row}
											numColumns={3}
											style={{
												borderRadius: 10,
												overflow: "hidden",
											}}
											listKey="2"
										/>
									</View>

									<Text style={styles.subtitle}>Intermediate</Text>
									<View style={styles.badgeContainer}>
										<FlatList
											scrollEnabled={false}
											data={intermediatebadges}
											renderItem={({ item }) => this.renderBadge(item)}
											columnWrapperStyle={styles.row}
											numColumns={3}
											style={{ borderRadius: 10, overflow: "hidden" }}
											listKey="3"
										/>
									</View>

									<Text style={styles.subtitle}>Expert</Text>
									<View style={styles.badgeContainer}>
										<FlatList
											scrollEnabled={false}
											data={expertbadges}
											renderItem={({ item }) => this.renderBadge(item)}
											columnWrapperStyle={styles.row}
											numColumns={3}
											style={{ borderRadius: 10, overflow: "hidden" }}
											listKey="4"
										/>
									</View>
								</View>
							</View>

							<Image
								source={require("../assets/images/avatars/ansonlo.jpg")}
								style={styles.profileimage}
							/>
							<TouchableOpacity
								style={styles.backarrowContainer}
								onPress={() => this.props.navigation.goBack()}
							>
								<Ionicons
									name="chevron-back-outline"
									style={styles.backarrow}
								/>
							</TouchableOpacity>
						</View>
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	arrow: {
		fontSize: 20,
		color: globalColors.gray,
	},

	badgeContainer: {
		marginTop: 7,
		marginBottom: 31,
	},
	backarrowContainer: {
		position: "absolute",
		top: 50,
		left: 30,
	},
	backarrow: {
		fontSize: 32,
		color: "white",
	},
	background: {
		backgroundColor: globalColors.lightBlue,
		minHeight: "100%",
	},
	topImage: {
		height: 150,
		width: 390,
	},
	profileimage: {
		position: "absolute",
		top: 96,
		left: windowWidth / 2 - 54,
		height: 108,
		width: 108,
		borderRadius: 100,
		borderColor: "black",
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
	row: {
		flex: 1,
		justifyContent: "space-around",
	},

	score: {
		fontFamily: "SF-Pro-Display-Regular",
		fontSize: 13,
		alignSelf: "center",
		color: globalColors.darkGray,
	},
	subtitle: {
		fontFamily: "SF-Pro-Display-Regular",
		fontSize: 13,
		color: globalColors.darkGray,
	},

	title: {
		fontFamily: "SF-Pro-Display-Regular",
		fontSize: 18,
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
});
