import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const TabBarItem = ({ title }) => {
  return (
    <View style = {styles.tabItem}>
      <Text style = {styles.tabText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#000000",
    fontWeight: "600",
  },
});

export default TabBarItem;