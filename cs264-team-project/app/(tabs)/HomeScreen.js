import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, TextInput } from "react-native";

import styles from "./HomeStyles";
import TabBarItem from "./TabBarItem";
import games from "./TestData";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handlePress = () => {
  if (!searchText.trim()) return;
  const results = games.filter((game) =>
    game.title.toLowerCase().includes(searchText.toLowerCase())
  );
  navigation.navigate("Results", { results });
};


  const tabs = ["Home", "Favorites", "Wish List"];

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.title}>Home</Text>

      <Text style = {styles.searchLabel}>Search Games</Text>

      <TextInput
        style = {styles.input}
        placeholder = "Enter Keyword"
        value = {searchText}
        onChangeText = {setSearchText}
      />

      <View style = {styles.submitContainer}>
        <Button title = "Submit" onPress={handlePress} />
      </View>

      <View style = {styles.bottomTabContainer}>
        {tabs.map((tab) => (
          <TabBarItem key = {tab} title={tab} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;