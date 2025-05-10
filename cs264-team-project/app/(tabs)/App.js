import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import styles from "./HomeStyles";
import TabBarItem from "./TabBarItem";

const App = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handlePress = () => {
    navigation.navigate("Details");
    console.log("Button Pressed", searchText);
  };

  const tabs = [ "Home", "Favorites", "Wish List" ];

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Home Screen</Text>
      
      <Text style = {styles.searchLabel}>Search Games</Text>
      
      <TextInput
        style = {styles.input}
        placeholder = "Enter Keyword"
        value = {searchText}
        onChangeText = {setSearchText} 
      />

      <View style = {styles.submitContainer}>
        <Button title = "Submit" onPress = {handlePress}/>
      </View>

      <View style={styles.bottomTabContainer}>
        {tabs.map((tab) => (
          <TabBarItem key={tab} title={tab} />
        ))}
      </View>

    </View>
  );
};

export default App;