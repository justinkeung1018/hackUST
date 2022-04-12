import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { globalFonts } from "../globalFonts";
import { globalColors } from "../globalColors";

export default function reviewCard(props) {
	return (
		<View style={[styles.card, styles.shadow]}>
			<View style={styles.headerFlex}>
				<View style={styles.infoAvatarAndDetailsContainer}>
					<Image style={styles.avatarImage} source={props.info.image} />
					<View style={styles.infoContainer}>
						<Text style={styles.infoTitleText}>{props.info.title}</Text>
						<Text style={[styles.userDetailsText]}>
							{props.info.name} · {props.info.level} · {props.info.date}
						</Text>
					</View>
				</View>
				<Text style={globalFonts.text}> {"★".repeat(props.info.stars)}</Text>
			</View>
			<Text style={styles.reviewText}>{props.info.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	avatarImage: {
		width: 30,
		height: 30,
		borderRadius: 100,
		marginRight: 10,
	},
	card: {
		marginBottom: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: globalColors.white,
		borderRadius: 10,
		borderColor: globalColors.lightGray,
		borderWidth: 1,
	},
	headerFlex: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	infoContainer: {
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	infoAvatarAndDetailsContainer: {
		flexDirection: "row",
	},
	infoTitleText: {
		fontFamily: "SF-Pro-Text-Bold",
		fontSize: 13,
		color: globalColors.black,
	},
	reviewText: {
		marginTop: 8,
	},
	shadow: {
		// shadowColor: "#000",
		// shadowOffset: { height: 4 },
		// shadowRadius: 30,
		// shadowOpacity: 0.1,
	},
	userDetailsText: {
		color: globalColors.darkGray,
	},
});
