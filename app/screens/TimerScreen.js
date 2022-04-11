import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	StyleSheet,
	Dimensions,
	ImageBackground,
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
		};
	}

	render() {
		return (
			<ImageBackground
				source={require("../assets/images/background.png")}
				// resizeMode="cover"
				style={styles.backgroundImage}
				imageStyle={{ opacity: 0.5 }}
			>
				<View style={styles.container}>
					<Stopwatch
						laps
						msecs={false}
						start={this.state.isStopwatchStart}
						reset={this.state.resetStopwatch}
						options={options}
					/>
					<View style={styles.endSessionButtonContainer}>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									isStopwatchStart: !this.state.isStopwatchStart,
								});
								this.setState({ resetStopwatch: false });
								console.log(this.state.isStopwatchStart);
							}}
							style={styles.endSessionButton}
						>
							<Text style={styles.buttonText}>
								{!this.state.isStopwatchStart ? "START" : "STOP"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		height: windowHeight,
		width: windowWidth,
		backgroundColor: "rgba(0,0,0,0.9)",
	},
	container: {
		paddingTop: 50,
		paddingLeft: 24,
		paddingRight: 24,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	endSessionButton: {
		width: "100%",
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 100,
		backgroundColor: globalColors.gray,
		opacity: 0.2,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	endSessionButtonContainer: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
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
