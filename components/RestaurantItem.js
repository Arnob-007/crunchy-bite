import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
	console.log(process.env.YELP_API_KEY);
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<RestaurantImage />
				<RestaurantInfo />
			</View>
		</TouchableWithoutFeedback>
	);
}

const RestaurantImage = () => {
	return (
		<View>
			<Image
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJG829yflNT4ZL18aGofHC6vxnE5V-KhDCA&usqp=CAU",
				}}
				style={styles.coverImage}
			/>
			<TouchableOpacity style={styles.favIcon}>
				<MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
			</TouchableOpacity>
		</View>
	);
};

const RestaurantInfo = () => {
	return (
		<View style={styles.infoContainer}>
			<View>
				<Text style={styles.name}>Restaurant Name</Text>
				<Text style={styles.time}>30-45 • min</Text>
			</View>
			<View style={styles.rating}>
				<Text>4.5</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		padding: 15,
		backgroundColor: "#fff",
	},
	coverImage: {
		width: "100%",
		height: 180,
		resizeMode: "cover",
	},
	favIcon: {
		position: "absolute",
		top: 10,
		right: 20,
	},
	infoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 5,
	},
	name: {
		fontSize: 15,
		fontWeight: "bold",
	},
	time: {
		fontSize: 13,
		color: "gray",
	},
	rating: {
		backgroundColor: "#eee",
		height: 30,
		width: 30,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
});
