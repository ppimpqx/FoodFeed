import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Foodshop from "../screens/Foodshop";
import Location from "../screens/Location";
import WantToEat from "../screens/WantToEat";
import Recipe from "../screens/Recipe";
import RecipeDetail from "../screens/RecipeDetail";
import RecipeForm from "../screens/RecipeForm";
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      {/* <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  /> */}
      <Stack.Screen name="Foodshop" component={Foodshop} />
      <Stack.Screen name="WantToEat" component={WantToEat} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Recipe" component={Recipe} options={{ title: "Recipe" }} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ title: "Recipe" }} />
      <Stack.Screen name="RecipeForm" component={RecipeForm}   />
    </Stack.Navigator>
  );
}
