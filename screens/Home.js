import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import axios from "axios";

const YELP_API_KEY = "";

export default function Home() {
	const [restaurants, setRestaurants] = React.useState([]);

	const getAllRestauraants = async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		const URL =
			"https://api.yelp.com/v3/businesses/search?term=restaurants&location=new-york";
		// const res = await axios.get(URL, config);
		fetch(URL, config)
			.then((res) => {
				res.json();
			})
			.then((res) => {
				console.log(res);
			});
		// console.log(res.status, res.data);
	};

	useEffect(() => {
		getAllRestauraants();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<HeaderTabs />
			<SearchBar />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItem />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#eee",
		flex: 1,
	},
});
