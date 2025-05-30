import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";

import WishlistScreen from "./Wishlist";

export default function App() {
  return (
    <NavigationContainer>
      <WishlistScreen />
    </NavigationContainer>
  );
}