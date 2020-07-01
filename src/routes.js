import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from './Home';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#1A1A1A' }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
