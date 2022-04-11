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
	ImageBackground,
	Modal,
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
		this.state = { modalVisible: true };
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	render() {
		const { modalVisible } = this.state;
		return (
			<ImageBackground
				source={require("../assets/images/sea-timer.jpg")}
				// resizeMode="cover"
				style={[styles.backgroundImage, {minHeight: windowHeight}]}
				imageStyle={{opacity: 0.8}}
			>
				<View style={styles.container}>
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
								<View style={{ flex: 1 }} />
								<View style={styles.modalCenterContainer}>
									<Text style={globalFonts.largeText}>You are at</Text>
									<Text style={[globalFonts.heading2, styles.locationName]}>
										{this.props.route.params.place}
									</Text>
									<TouchableOpacity
										style={[styles.startButton, globalStyles.interactiveShadow]}
										onPress={() => {
											this.props.navigation.navigate("TimerScreen");
											this.setModalVisible(!modalVisible);
										}}
									>
										<Text style={globalFonts.largeText}>Start</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.notWhereYouAreContainer}>
									<TouchableOpacity
										onPress={() => this.props.navigation.navigate("SelectLocationScreen")}
									>
										<Text
											style={[globalFonts.largeText, styles.notWhereYouAreText]}
										>
											Not where you are?
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<TouchableOpacity
								style={styles.arrowContainer}
								onPress={() => this.props.navigation.goBack()}
							>
								<Ionicons name="chevron-back-outline" style={globalStyles.arrow} />
							</TouchableOpacity>
							
						</View>
					</Modal>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		height: windowHeight,
		width: windowWidth,
		backgroundColor: "rgba(0,0,0,0.9)",
	},
	backgroundImageOverlay: {
		backgroundColor: globalColors.black,
		opacity: 0.5,
	},
	container: {
		paddingTop: 50,
		paddingLeft: 24,
		paddingRight: 24,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	locationName: {
		marginTop: 20,
		marginBottom: 20,
	},
	modal: {
		width: windowWidth - 48,
		height: 440,
		backgroundColor: globalColors.white,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
	},
	modalCenterContainer: {
		flex: 4,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	notWhereYouAreContainer: {
		flex: 1,
	},
	notWhereYouAreText: {
		color: globalColors.darkBlue,
	},
	startButton: {
		backgroundColor: globalColors.lightBlue,
		width: 226,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingBottom: 12,
	},
	arrowContainer: {
		position: "absolute",
		top: 160,
		left: 40,
	},
});
