import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ResultsPage from "./ResultsPage";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator
    initialRouteName = "Game Shelf"
    screenOptions = {{
      headerStyle: {
        backgroundColor: "orange",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center", 
    }}
  >
    <Stack.Screen name = "Game Shelf" component = {HomeScreen} />
    <Stack.Screen name = "Results" component  ={ResultsPage} />
  </Stack.Navigator>
);

export default AppNavigation;