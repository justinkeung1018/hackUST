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
import CircularProgress from "react-native-circular-progress-indicator";

export default class StatisticsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allTimePressed: true,
			thisWeekPressed: false,
			thisMonthPressed: false,
		};
	}

	render() {
		return (
			<View
				style={[
					globalStyles.container,
					styles.backgroundColor,
					styles.container,
				]}
			>
				<View style={styles.headerFlex}>
					<View style={styles.arrowContainer}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Ionicons
								name="chevron-back-outline"
								style={globalStyles.arrow}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.titleContainer}>
						<Text style={globalFonts.title}>Statistics</Text>
					</View>
					<View style={styles.emptyFlexContainer}></View>
				</View>
				<View style={[styles.buttonFlex, globalStyles.interactiveShadow]}>
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
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.levelContainer}>
						<View style={styles.levelFlex}>
							<Text style={[styles.levelText, { marginRight: 10 }]}>
								Level 10
							</Text>
							<Text
								style={[globalFonts.Text, { color: globalColors.darkGray }]}
							>
								1200/1500
							</Text>
						</View>
					</View>
					<View style={styles.categoryContainer}>
						<View style={styles.categoryHeaderFlex}>
							<Ionicons name="bar-chart-outline" style={styles.categoryIcon} />
							<Text style={styles.categoryHeaderText}>Score breakdown</Text>
						</View>
						<View style={styles.categoryBreakdownContainer}>
							<View style={styles.categoryBreakdownFlex}>
								<View
									style={styles.categoryBreakdownCircularProgressLeftMargin}
								>
									<View style={styles.categoryBreakdownCircularProgressFlex}>
										<CircularProgress
											value={500}
											radius={55}
											maxValue={800}
											activeStrokeColor={globalColors.darkBlue}
											inActiveStrokeColor={"#B7D4FD"}
											progressValueStyle={{ color: globalColors.darkBlue }}
										/>
										<Text>Cardio</Text>
									</View>
								</View>
								<View style={styles.categoryBreakdownCircularProgressFlex}>
									<CircularProgress
										value={400}
										radius={55}
										maxValue={800}
										activeStrokeColor={globalColors.darkBlue}
										inActiveStrokeColor={"#B7D4FD"}
										progressValueStyle={{ color: globalColors.darkBlue }}
									/>
									<Text>Strength</Text>
								</View>
							</View>
						</View>
						<View style={styles.categoryBreakdownContainer}>
							<View style={styles.categoryBreakdownFlex}>
								<View
									style={styles.categoryBreakdownCircularProgressLeftMargin}
								>
									<View style={styles.categoryBreakdownCircularProgressFlex}>
										<CircularProgress
											value={100}
											radius={55}
											maxValue={800}
											activeStrokeColor={globalColors.darkBlue}
											inActiveStrokeColor={"#B7D4FD"}
											progressValueStyle={{ color: globalColors.darkBlue }}
										/>
										<Text>Flexibility</Text>
									</View>
								</View>
								<View style={styles.categoryBreakdownCircularProgressFlex}>
									<CircularProgress
										value={100}
										radius={55}
										maxValue={800}
										activeStrokeColor={globalColors.darkBlue}
										inActiveStrokeColor={"#B7D4FD"}
										progressValueStyle={{ color: globalColors.darkBlue }}
									/>
									<Text>Others</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.categorySideBySideFlex}>
						<View
							style={[
								styles.categoryContainer,
								styles.categorySideBySideLeftChild,
							]}
						>
							<View style={styles.categoryHeaderFlex}>
								<Ionicons name="location-outline" style={styles.categoryIcon} />
								<Text style={styles.categoryHeaderText}>Locations visited</Text>
							</View>
							<View style={styles.categorySideBySideChildFlex}>
								<Text style={styles.largeStatsText}>0</Text>
							</View>
						</View>
						<View
							style={[
								styles.categoryContainer,
								styles.categorySideBySideRightChild,
							]}
						>
							<View style={styles.categoryHeaderFlex}>
								<Ionicons name="timer-outline" style={styles.categoryIcon} />
								<Text style={styles.categoryHeaderText}>Active time</Text>
							</View>
							<View style={styles.categorySideBySideChildFlex}>
								<View style={styles.categoryTimeFlex}>
									<Text style={styles.largeStatsText}>20</Text>
									<Text style={styles.categoryTimeUnit}>hr</Text>
									<Text style={styles.largeStatsText}>50</Text>
									<Text style={styles.categoryTimeUnit}>min</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.categoryContainer}>
						<View style={styles.categoryHeaderFlex}>
							<Ionicons name="heart-outline" style={styles.categoryIcon} />
							<Text style={styles.categoryHeaderText}>Your favorite sport</Text>
						</View>
						<View style={styles.categoryFavoriteTextContainer}>
							<Text style={styles.categoryFavoriteText}>Trampoline</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	arrowContainer: {
		flex: 1,
	},
	backgroundColor: {
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
	categoryBreakdownContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 15,
	},
	categoryBreakdownCircularProgressFlex: {
		flexDirection: "column",
		alignItems: "center",
	},
	categoryBreakdownCircularProgressLeftMargin: {
		marginRight: 50,
	},
	categoryBreakdownFlex: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	categoryContainer: {
		backgroundColor: globalColors.white,
		borderRadius: 10,
		padding: 10,
		marginBottom: 15,
	},
	categoryFavoriteText: {
		fontFamily: "SF-Pro-Text-Medium",
		fontSize: 18,
	},
	categoryFavoriteTextContainer: {
		marginTop: 8,
	},
	categoryHeaderFlex: {
		flexDirection: "row",
	},
	categoryHeaderText: {
		fontFamily: "SF-Pro-Text-Medium",
		fontSize: 13,
		color: globalColors.darkBlue,
	},
	categoryIcon: {
		color: globalColors.darkBlue,
		fontSize: 15,
		marginRight: 8,
	},
	categorySideBySideChildFlex: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 10,
	},
	categorySideBySideLeftChild: {
		flex: 1,
		marginRight: 15,
	},
	categorySideBySideRightChild: {
		flex: 1,
	},
	categorySideBySideFlex: {
		flexDirection: "row",
	},
	categoryTimeFlex: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	categoryTimeUnit: {
		marginLeft: 2,
		marginRight: 2,
		marginBottom: 5,
		color: globalColors.darkGray,
	},
	container: {
		height: "100%",
	},
	emptyFlexContainer: {
		flex: 1,
	},
	headerFlex: {
		flexDirection: "row",
		marginBottom: 20,
	},
	largeStatsText: {
		fontFamily: "SF-Pro-Display-Medium",
		fontSize: 40,
	},
	levelContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 16,
		marginBottom: 16,
	},
	levelFlex: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	levelText: {
		fontFamily: "SF-Pro-Text-Medium",
		fontSize: 18,
	},
	titleContainer: {
		flex: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
