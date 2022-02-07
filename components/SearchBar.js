import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ioncons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
	return (
		<View style={styles.container}>
			<GooglePlacesAutocomplete
				placeholder='Search'
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: 700,
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
						margin: 8,
					},
				}}
				renderLeftButton={() => (
					<View style={styles.leftIcon}>
						<Ioncons name='location' size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View style={styles.rightIcon}>
						<AntDesign name='clockcircle' size={11} />
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	leftIcon: {
		marginLeft: 10,
	},
	rightIcon: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 10,
		gap: 6,
		backgroundColor: "white",
		borderRadius: 30,
		padding: 9,
	},
});
