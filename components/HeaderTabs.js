import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
	const [active, setActive] = useState("Delivery");

	return (
		<View style={styles.container}>
			<TabBtn title='Delivery' active={active} setActive={setActive} />
			<TabBtn title='Pickup' active={active} setActive={setActive} />
		</View>
	);
}

const TabBtn = (props) => {
	return (
		<TouchableOpacity
			style={[styles.tabBtn, props.active === props.title && styles.active]}
			onPress={() => props.setActive(props.title)}
		>
			<Text
				style={[
					styles.tabBtnText,
					props.active === props.title && styles.active,
				]}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "white",
		padding: 10,
	},
	tabBtn: {
		backgroundColor: "white",
		borderRadius: 30,
		paddingVertical: 6,
		paddingHorizontal: 16,
	},
	tabBtnText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
	active: {
		backgroundColor: "black",
		color: "white",
	},
});
