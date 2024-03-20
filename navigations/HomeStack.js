import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  