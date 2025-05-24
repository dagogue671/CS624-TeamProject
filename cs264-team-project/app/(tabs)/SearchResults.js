import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchResults = ({ game }) => {
    return (
        <View style = {styles.card}>
            <Text style = {styles.cardText}>{game.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        color: "#333333",
    },
});

export default SearchResults;