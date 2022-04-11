import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
	Permissions,
	Modal,
	Dimensions,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalStyles } from "../assets/globalStyles";
import { globalColors } from "../assets/globalColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class MapScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: null,
			region: {
				latitude: 51.52340004914676,
				longitude: -0.2619892576715497,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			modalVisible: false,
		};
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	render() {
		return (
			<View style={styles.container}>
				<Modal
					animationType="none"
					transparent={true}
					visible={this.modalVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						this.setModalVisible(!this.modalVisible);
					}}
					// style={styles.modal}
				>
					<Text>Hell0o</Text>
				</Modal>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					region={this.state.region}
					initialRegion={this.state.initialRegion}
					followsUserLocation={true}
				></MapView>
				<TouchableOpacity
					style={styles.initialButton}
					onPress={() => this.props.navigation.navigate("MapModalScreen")}
				>
					<Text style={[globalFonts.largeTextBold, styles.initialButtonText]}>
						I am at a sports venue
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		height: windowHeight,
		width: windowWidth,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	initialButton: {
		position: "absolute",
		top: 80,
		backgroundColor: globalColors.black,
		opacity: 0.5,
		width: windowWidth - 48,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 18,
		paddingBottom: 18,
		marginLeft: 24,
		marginRight: 24,
		borderRadius: 10,
	},
	initialButtonText: {
		color: globalColors.white,
	},
	map: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
	modal: {
		backgroundColor: globalColors.white,
		marginBottom: 0,
	},
});
