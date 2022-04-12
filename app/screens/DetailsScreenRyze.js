import React, { Component } from "react";
import {
	Image,
	StyleSheet,
	Dimensions,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { globalColors } from "../assets/globalColors";
import { globalFonts } from "../assets/globalFonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { photos, reviews } from "./DetailsRyze";
import ReviewCard from "../assets/components/reviewCard";
import { globalStyles } from "../assets/globalStyles";

export default class DetailsScreenRyze extends Component {
	constructor(props) {
		super(props);
		this.state = { favorite: false };
	}
	renderImage() {
		let image = this.state.favorite ? "heart" : "heart-outline";
		return <Ionicons name={image} style={styles.heart} />;
	}
	render() {
		let { location, activity, price, time, day, hour } =
			this.props.route.params;
		console.log(photos);
		return (
			<ScrollView style={{ backgroundColor: globalColors.white }}>
				<Image
					source={require("../assets/images/filter-cards/ryze.jpeg")}
					style={styles.image}
				/>
				<View style={styles.navBar}>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate("ResultsScreen", {
								location: location,
								activity: activity,
								price: price,
								time: time,
								day: day,
								hour: hour,
							})
						}
					>
						<Ionicons name="chevron-back-outline" style={styles.arrow} />
					</TouchableOpacity>
					<View style={styles.filterHeartContainer}>
						<TouchableOpacity
							style={styles.filterContainer}
							onPress={() =>
								this.props.navigation.navigate("Search", {
									location: location,
									activity: activity,
									price: price,
									time: time,
									day: day,
									hour: hour,
								})
							}
						>
							<Image
								source={require("../assets/images/white_filter.png")}
								style={styles.filter}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => this.setState({ favorite: !this.state.favorite })}
						>
							{this.renderImage()}
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<View style={styles.basicInfo}>
						<Text style={globalFonts.heading2}>Ryze Hong Kong</Text>
						<Text style={styles.info}>$$ · Quarry Bay · Trampoline</Text>
						<Text style={styles.open}>Open</Text>
					</View>
					<View style={styles.infoCard}>
						<View style={styles.infoCardComponent}>
							<Image
								source={require("../assets/images/darkblue_map.png")}
								style={styles.icon}
							/>
							<Text style={globalFonts.text}>
								3/F, Kodak House 1, 321 Java Rd, Quarry Bay
							</Text>
						</View>
						<View style={styles.infoCardComponent}>
							<Image
								source={require("../assets/images/darkblue_phone.png")}
								style={styles.icon}
							/>
							<Text style={globalFonts.text}>+852 2337 8191</Text>
						</View>
						<View style={styles.infoCardComponent}>
							<Image
								source={require("../assets/images/darkblue_mail.png")}
								style={styles.icon}
							/>
							<Text style={globalFonts.text}>jump@ryze.info</Text>
						</View>
						<View style={styles.infoCardComponentLast}>
							<Image
								source={require("../assets/images/darkblue_web.png")}
								style={styles.icon}
							/>
							<Text style={globalFonts.text}>
								https://www.ryzehongkong.com/
							</Text>
						</View>
					</View>
					<View style={styles.infoCard}>
						<View style={styles.infoCardHeading}>
							<Image
								source={require("../assets/images/darkblue_clock.png")}
								style={styles.icon}
							/>
							<Text style={styles.infoCardHeadingText}>Opening hours</Text>
						</View>
						<Text style={globalFonts.text}>
							· Mon - Thur: 1000 - 1800 {"\n"}· Fri - Sun: 0900 - 2100 {"\n"}·
							Public Holidays: 0900 - 2100
						</Text>
					</View>
					<View style={styles.infoCard}>
						<View style={styles.infoCardHeading}>
							<Image
								source={require("../assets/images/darkblue_coin.png")}
								style={styles.icon}
							/>
							<Text style={styles.infoCardHeadingText}>Price</Text>
						</View>
						<View style={styles.infoCardCentering}>
							<Image
								style={styles.priceImage}
								source={require("../assets/images/ryze-details/price.png")}
							/>
						</View>
					</View>
					<View style={styles.sectionPhotos}>
						<View style={styles.sectionHeading}>
							<View style={styles.sectionHeadingStatic}>
								<Image
									source={require("../assets/images/darkblue_coin.png")}
									style={styles.icon}
								/>
								<Text style={styles.sectionHeadingText}>Photos</Text>
							</View>
							<TouchableOpacity style={styles.sectionHeadingButton}>
								<Text style={styles.sectionHeadingButtonText}>
									+ Add photos
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.photosFlex}>
							<Image style={styles.photo} source={photos[0].image} />
							<Image style={styles.photo} source={photos[1].image} />
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate("PhotoScreenRyze")
								}
							>
								<Image style={styles.photo} source={photos[2].image} />
								<View style={styles.morePhotosButton}>
									<Text
										style={[globalFonts.heading4Bold, styles.morePhotosText]}
									>
										+{photos.length - 2}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.sectionReviews}>
						<View style={styles.sectionHeading}>
							<View style={styles.sectionHeadingStatic}>
								<Image
									source={require("../assets/images/darkblue_coin.png")}
									style={styles.icon}
								/>
								<Text style={styles.sectionHeadingText}>Reviews</Text>
							</View>
							<TouchableOpacity style={styles.sectionHeadingButton}>
								<Text style={styles.sectionHeadingButtonText}>
									+ Add reviews
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.reviewCardAndButtonFlex}>
							<View style={styles.reviewCardContainer}>
								<ReviewCard info={reviews[0]} />
							</View>
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate("ReviewScreenRyze")
								}
							>
								<Text style={[globalFonts.text, styles.showAllReviewsText]}>
									Show all 99 reviews
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = windowWidth;

const styles = StyleSheet.create({
	arrow: {
		color: globalColors.white,
		fontSize: 32,
	},
	basicInfo: {
		marginBottom: 10,
	},
	container: {
		marginTop: 30,
		paddingLeft: "8%",
		paddingRight: "8%",
		marginBottom: 30,
	},
	filter: {
		width: 30,
		height: 30,
	},
	filterContainer: {
		marginRight: 20,
	},
	filterHeartContainer: {
		flexDirection: "row",
	},
	heart: {
		width: 30,
		height: 30,
		color: globalColors.white,
		fontSize: 32,
	},
	icon: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	image: {
		width: windowWidth,
		height: windowHeight,
	},
	info: {
		marginTop: 10,
		marginBottom: 10,
		color: globalColors.gray,
	},
	infoCard: {
		backgroundColor: globalColors.lightBlue,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
		width: "100%",
	},
	infoCardCentering: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	infoCardComponent: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	infoCardComponentLast: {
		flexDirection: "row",
		alignItems: "center",
	},
	infoCardHeading: {
		flexDirection: "row",
		marginBottom: 10,
	},
	infoCardHeadingText: {
		fontFamily: "SF-Pro-Text-Bold",
		color: globalColors.darkBlue,
		fontSize: 18,
	},
	morePhotosButton: {
		backgroundColor: "rgba(0,0,0,0.5)",
		position: "absolute",
		width: 105,
		height: 105,
		top: 0,
		left: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	morePhotosText: {
		color: globalColors.white,
		marginLeft: -5,
	},
	navBar: {
		position: "absolute",
		left: 30,
		top: 50,
		width: windowWidth - 60,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	open: {
		color: "green",
	},
	photo: {
		width: 105,
		height: 105,
	},
	photosFlex: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},
	priceImage: {
		width: "130%",
		height: undefined,
		aspectRatio: 1,
		resizeMode: "contain",
	},
	reviewCardAndButtonFlex: {
		flexDirection: "column",
		alignItems: "center",
	},
	reviewCardContainer: {
		marginTop: 20,
	},
	sectionHeading: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	sectionHeadingButton: {
		backgroundColor: globalColors.darkBlue,
		borderRadius: 100,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},
	sectionHeadingButtonText: {
		color: globalColors.white,
	},
	sectionHeadingFlex: {
		flexDirection: "row",
		marginBottom: 10,
	},
	sectionHeadingStatic: {
		alignItems: "center",
		flexDirection: "row",
	},
	sectionHeadingText: {
		fontFamily: "SF-Pro-Text-Bold",
		fontSize: 18,
		color: globalColors.black,
	},
	sectionPhotos: {
		marginTop: 45,
		marginBottom: 30,
	},
	sectionReviews: {},
	showAllReviewsText: {
		color: globalColors.darkBlue,
	},
});
