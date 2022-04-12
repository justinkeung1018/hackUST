import React, { Component } from "react";
import {
	Text,
	StyleSheet,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	Modal,
} from "react-native";
import { globalFonts } from "../globalFonts";
import { globalColors } from "../globalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class BadgeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}
	render() {
		const { modalVisible } = this.state;
		return (
			<View>
				<View style={{ backgroundColor: "white" }}>
					<TouchableOpacity onPress={() => this.setModalVisible(true)}>
						<Image source={this.props.badge.image} style={styles.badge} />
					</TouchableOpacity>
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
					<View style={[styles.modalContainer, styles.shadow]}>
						<View style={styles.modal}>
							<View style={styles.modalCenterContainer}>
								<Image source={this.props.badge.image} />
								<Text style={[globalFonts.heading3Bold, styles.badgeNameText]}>
									{this.props.badge.name}
								</Text>
								<Text style={[globalFonts.largeText, styles.badgeDetailText]}>
									{this.props.badge.detail}
								</Text>
							</View>
							<TouchableOpacity
								style={styles.closeButton}
								onPress={() => this.setModalVisible(!modalVisible)}
							>
								<Text style={[globalFonts.largeText, styles.closeButtonText]}>
									Close
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	info: {
		color: globalColors.gray,
	},
	badge: {
		width: 120,
		height: 120,
	},
	badgeDetailText: {
		textAlign: "center",
		color: globalColors.darkGray,
	},
	badgeNameText: {
		marginTop: -10,
		marginBottom: 5,
	},
	closeButton: {
		backgroundColor: globalColors.blue,
		borderRadius: 10,
		marginTop: 80,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 60,
		paddingRight: 60,
	},
	closeButtonText: {
		color: globalColors.white,
	},
	largeBadge: {
		width: 200,
		height: 200,
	},
	modal: {
		width: windowWidth - 48,
		backgroundColor: globalColors.white,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 30,
		paddingBottom: 30,
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
	shadow: {
		shadowColor: "#000",
		shadowOffset: { height: 4 },
		shadowRadius: 30,
		shadowOpacity: 0.5,
	},
});
