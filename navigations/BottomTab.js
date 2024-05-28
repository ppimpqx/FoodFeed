import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome6 } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import Order from '../screens/Order';
import Inbox from '../screens/Inbox';
import More from '../screens/More';
import Foodshop from '../screens/Foodshop';
import WantToEat from '../screens/WantToEat';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#009688', tabBarInactiveTintColor: '#B3DBB6' }}>
      <Tab.Screen
        name="HomeStack" 
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="house" color={color} size={size} /> ),
          headerShown : false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={WantToEat}
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="rotate-left" color={color} size={size} /> ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={WantToEat}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="inbox" color={color} size={size} /> ),
        }}
      />
      <Tab.Screen
        name="User"
        component={WantToEat}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="person" color={color} size={size} /> ),
        }}
      />
      {/* <Tab.Screen
        name="Food"
        component={Foodshop}
        options={{
          tabBarLabel: "Food",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="bowl-food" color={color} size={size} /> ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Favorite"
        component={TodoList}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="heart" color={color} size={size} /> ),
        }}
      /> */}
    </Tab.Navigator>
  );
}