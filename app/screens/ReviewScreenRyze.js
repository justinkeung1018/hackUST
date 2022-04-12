import React, { Component } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	FlatList,
	Image,
	Dimensions,
} from "react-native";
import { globalFonts } from "../assets/globalFonts";
import { globalStyles } from "../assets/globalStyles";
import { globalColors } from "../assets/globalColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { reviews } from "./DetailsRyze";
import ReviewCard from "../assets/components/reviewCard";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class ReviewScreenRyze extends Component {
	render() {
		return (
			<FlatList
				style={globalStyles.container}
				ListHeaderComponent={
					<View style={styles.titleBar}>
						<View style={styles.results}>
							<TouchableOpacity
								onPress={() => this.props.navigation.goBack()}
								style={styles.arrowContainer}
							>
								<Ionicons name="chevron-back-outline" style={styles.arrow} />
							</TouchableOpacity>
							<Text style={[globalFonts.heading3Bold, styles.title]}>
								All reviews
							</Text>
						</View>
					</View>
				}
				data={reviews}
				renderItem={({ item }) => <ReviewCard info={item} />}
			/>
		);
	}
}

const styles = StyleSheet.create({
	arrow: {
		fontSize: 32,
	},
	arrowContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	photo: {
		width: windowWidth / 2 - 24 - 4,
		height: 130,
		marginBottom: 8,
	},
	results: {
		flexDirection: "row",
		alignItems: "center",
	},
	row: {
		flex: 1,
		justifyContent: "space-between",
	},
	titleBar: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 13,
	},
});
