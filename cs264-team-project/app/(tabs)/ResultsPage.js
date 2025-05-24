import React from "react";
import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";
import SearchResults from "./SearchResults";

const ResultsPage = ({ route }) => {
  const { results } = route.params;

  return (
    <SafeAreaView style = {styles.container}>
      {results.length > 0 ? (
        <FlatList
          data = {results}
          keyExtractor = {(item) => item.id}
          renderItem = {({ item }) => <SearchResults game = {item} />}
        />
      ) : (
        <Text style = {styles.noResults}>No games found.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  noResults: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginTop: 40,
  },
});

export default ResultsPage;