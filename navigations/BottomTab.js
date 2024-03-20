import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome6 } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import Order from '../screens/Order';
import Inbox from '../screens/Inbox';
import More from '../screens/More';
import Shopfood from '../screens/Shopfood';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#009688', tabBarInactiveTintColor: 'gray' }}>
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
        component={Order}
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="rotate-left" color={color} size={size} /> ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="inbox" color={color} size={size} /> ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="bars" color={color} size={size} /> ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={Shopfood}
        options={{
          tabBarLabel: "Food",
          tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="bowl-food" color={color} size={size} /> ),
        }}
      />
    </Tab.Navigator>
  );
}