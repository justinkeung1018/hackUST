import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	StyleSheet,
	Dimensions,
	ImageBackground,
	Modal,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalColors } from "../assets/globalColors";
import { globalStyles } from "../assets/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Stopwatch } from "react-native-stopwatch-timer";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class TimerScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isStopwatchStart: true,
			resetStopwatch: false,
			modalVisible: false,
			currentTime: null,
		};
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	render() {
		let { place } = this.props.route.params;
		const { modalVisible } = this.state;
		return (
			<ImageBackground
				source={require("../assets/images/sea-timer.jpg")}
				// resizeMode="cover"
				style={styles.backgroundImage}
				imageStyle={{ opacity: 0.5 }}
			>
				<View style={styles.container}>
					<View style={styles.stopwatchContainer}>
						<Stopwatch
							laps
							msecs={false}
							start={this.state.isStopwatchStart}
							reset={this.state.resetStopwatch}
							options={options}
							getTime={(time) => {
								this.currentTime = time;
							}}
						/>
					</View>
					<View style={styles.endSessionButtonContainer}>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									isStopwatchStart: !this.state.isStopwatchStart,
								});
								this.setState({ resetStopwatch: false });
								this.setModalVisible(!modalVisible);
							}}
							style={styles.endSessionButton}
						>
							<Text style={[globalFonts.heading3Bold, styles.endSessionText]}>
								End session
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.modalContainer}>
						<View style={styles.modal}>
							<View style={styles.modalCenterContainer}>
								<Text style={[globalFonts.heading3Bold, styles.modalHeading]}>
									Session summary
								</Text>
								<View style={styles.bulletFlex}>
									<Text style={styles.bulletText}>Location:</Text>
									<Text style={styles.largeText}>{place}</Text>
									{/* Retrieve from database */}
								</View>
								<View style={styles.bulletFlex}>
									<Text style={styles.bulletText}>Sports:</Text>
									<Text style={styles.largeText}>Trampoline</Text>
									{/* Retrieve from database */}
								</View>
								<View style={styles.bulletFlex}>
									<Text style={styles.bulletText}>Time:</Text>
									<Text style={styles.largeText}>{this.currentTime}</Text>
									{/* Retrieve from timer */}
								</View>
								<View style={styles.bulletFlex}>
									<Text style={styles.bulletText}>Points:</Text>
									<Text style={styles.largeText}>Cardio + 50</Text>
									{/* Algorithm to compute points based on type of sport and duration */}
								</View>
							</View>
							<View style={styles.notWhereYouAreContainer}>
								<TouchableOpacity
									onPress={() => {
										this.setModalVisible(!modalVisible);
										this.props.navigation.navigate("HomeScreen", {
											points: 50,
										});
									}}
									style={styles.doneButton}
								>
									<Text style={styles.doneButtonText}>Done</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		height: windowHeight,
		width: windowWidth,
		backgroundColor: "rgba(0,0,0,0.9)",
		flex: 1,
	},
	bulletFlex: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 30,
	},
	bulletText: {
		color: globalColors.darkGray,
	},
	container: {
		paddingTop: 50,
		paddingLeft: 24,
		paddingRight: 24,
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	doneButton: {
		backgroundColor: globalColors.blue,
		borderRadius: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
	},
	doneButtonText: {
		color: globalColors.white,
	},
	endSessionButton: {
		width: "100%",
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 100,
		backgroundColor: "rgba(196, 196, 196, 0.2)", // globalColors.gray with opacity 0.2
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	endSessionButtonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	endSessionText: {
		color: globalColors.white,
	},
	modal: {
		width: windowWidth - 48,
		height: 440,
		backgroundColor: globalColors.white,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	modalCenterContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	modalContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	modalHeading: {
		marginBottom: 50,
	},
	stopwatchContainer: {
		flex: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});

const options = {
	container: {
		backgroundColor: "transparent",
	},
	text: {
		fontFamily: "SF-Pro-Display-Bold",
		fontSize: 72,
		color: globalColors.white,
	},
};
