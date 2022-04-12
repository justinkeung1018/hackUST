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
import { photos } from "./DetailsRyze";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class PhotoScreenRyze extends Component {
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
								<Ionicons
									name="chevron-back-outline"
									style={globalStyles.arrow}
								/>
							</TouchableOpacity>
							<Text style={[globalFonts.heading3Bold, styles.title]}>
								{photos.length} photos
							</Text>
						</View>
					</View>
				}
				data={photos}
				renderItem={({ item }) => (
					<Image style={styles.photo} source={item.image} />
				)}
				columnWrapperStyle={styles.row}
				numColumns={2}
			/>
		);
	}
}

const styles = StyleSheet.create({
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
