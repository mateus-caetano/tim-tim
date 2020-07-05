import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Places from './Places';
import Place from './Place';
import Reservations from './Reservations';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" mode>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Places"
          component={Places}
          options={{ title: 'Todos os locais' }}
        />

        <Stack.Screen
          name="PlaceProfile"
          component={Place}
          options={{ title: 'Bar' }}
        />

        <Stack.Screen
          name="Reservations"
          component={Reservations}
          options={{ title: 'Pedidos e reservas' }}
        />

        <Stack.Screen
          name="Order"
          component={Reservations}
          options={{ title: 'Pedir' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
